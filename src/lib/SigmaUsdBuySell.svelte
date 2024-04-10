<script lang="ts">
    import TokenSlider from "./TokenSlider.svelte";
    import { calculateMintSigUsdRateWithFee, calculateRedeemSigUsdRateWithFee } from "./sigmaUsd/sigmaUsd";
    import { SIGMA_USD_FEE_DENOM, SIGMA_USD_MINER_FEE_NANO_ERG, SIGMA_USD_UI_FEE, sigma_usd_bank_box, usd_erg_oracle_box } from "./sigmaUsd/store";

    // BUY SIDE
    //price
    $: priceMintSigmaUsd = $sigma_usd_bank_box ? 10**-7 / calculateMintSigUsdRateWithFee(
        BigInt($sigma_usd_bank_box.value),
        BigInt($sigma_usd_bank_box.additionalRegisters.R4.renderedValue),
        BigInt($usd_erg_oracle_box.additionalRegisters.R4.renderedValue)/100n,
        BigInt(amountSigmaUsd*100),
        1n,
    ) : 0

    //amount
    let amountSigmaUsd: number  = 100;
    function onInputChangeAmountSigmaUsd(){
        calcValueMintSigmaUsd()
    }

    // value
    //$: valueMintSigmaUsd = $sigma_usd_bank_box ? calcMintValue(amountSigmaUsd,priceMintSigmaUsd): 0 ;
    let valueMintSigmaUsd: number|undefined;
    function onInputChangeValueMintSigmaUsd():void{
        const amount = valueMintSigmaUsd && priceMintSigmaUsd ? valueMintSigmaUsd/priceMintSigmaUsd : 0
        amountSigmaUsd  = Math.floor(amount);
    }
    function calcValueMintSigmaUsd():void{
        valueMintSigmaUsd = calcMintValue(amountSigmaUsd,priceMintSigmaUsd)
    }

    $: protocolFee = $sigma_usd_bank_box ? calcMintFee(amountSigmaUsd,priceMintSigmaUsd): 0 ;

    function calcMintValue(amount:number, price:number): number{
        const value = (amount * price)
        const uiFee = (amount * price) * SIGMA_USD_UI_FEE / SIGMA_USD_FEE_DENOM
        const minerFee = SIGMA_USD_MINER_FEE_NANO_ERG * 10**-9
        return value + uiFee + minerFee
    }

    function calcMintFee(amount:number, price:number): number{
        const contractFee = (amount * price) / 1.02 * 0.02
        const uiFee = (amount * price) * SIGMA_USD_UI_FEE / SIGMA_USD_FEE_DENOM
        const minerFee = SIGMA_USD_MINER_FEE_NANO_ERG * 10**-9
        return contractFee + uiFee + minerFee
    }

    // SELL SIDE
    let valueERG  = 100;
    $: priceRedeemSigmaUsd = $sigma_usd_bank_box ? 10**-7 / calculateRedeemSigUsdRateWithFee(
        BigInt($sigma_usd_bank_box.value),
        BigInt($sigma_usd_bank_box.additionalRegisters.R4.renderedValue),
        BigInt($usd_erg_oracle_box.additionalRegisters.R4.renderedValue)/100n,
        BigInt(valueERG*10**9),
        1n,
    ) : 0
    $: amountRedeemSigmaUsd = $sigma_usd_bank_box ? calcRedeemValue(valueERG, priceRedeemSigmaUsd): 0 ;

    function calcRedeemValue(amount:number, price:number): number{
        const value = amount / price
        const uiFee = value * SIGMA_USD_UI_FEE / SIGMA_USD_FEE_DENOM
        const minerFee = SIGMA_USD_MINER_FEE_NANO_ERG * 10**-9 / price
        return value + uiFee + minerFee
    }

    function tokenSliderChange(e:Event){
        amountSigmaUsd = e?.target?.value; 
        onInputChangeAmountSigmaUsd()
    }
</script>
<div>
    {#if $sigma_usd_bank_box && $usd_erg_oracle_box}
    <div>$sigma_usd_bank_box.value: {$sigma_usd_bank_box.value}</div>
    <div>$sigma_usd_bank_box.additionalRegisters.R4.renderedValue: {$sigma_usd_bank_box.additionalRegisters.R4.renderedValue}</div>
    <div>$usd_erg_oracle_box.additionalRegisters.R4.renderedValue: {$usd_erg_oracle_box.additionalRegisters.R4.renderedValue}</div>
    {/if}
    <!-- BUY_SELL_SIGMA_USD -->
    <div class="flex gap-10">
        <div class="flex flex-col gap-2">
            <div class="flex items-center">
                <div class="w-40">Available: </div>
                <div>xxx</div>
                <div class="ml-1">ERG</div>
            </div>
            <div class="flex items-center">
                <div class="w-40">Price: </div><input type="text" bind:value={priceMintSigmaUsd}><div class="ml-2">ERG</div>
            </div>
            <div class="flex items-center">
                <div class="w-40">Amount: </div><input type="text" bind:value={amountSigmaUsd} on:input={onInputChangeAmountSigmaUsd}><div class="ml-2">SigmaUSD</div>
            </div>
            <div>
                <TokenSlider bind:amount={amountSigmaUsd} onChange={tokenSliderChange} />
            </div>
            <div class="flex items-center">
                <div class="w-40">Value: </div><input type="text" bind:value={valueMintSigmaUsd} on:input={onInputChangeValueMintSigmaUsd}><div class="ml-2">ERG</div>
            </div>
            <button class="text-center w-full border py-2">BUY</button>
            <div class="flex items-center">
                <div class="w-40">incl. Protocol Fee: </div><input type="text" bind:value={protocolFee}><div class="ml-2">ERG</div>
            </div>
        </div>

                <div class="flex flex-col gap-2">
            <div class="flex items-center">
                <div class="w-40">Available: </div>
                <div>xxx</div>
                <div class="ml-1">SigmaUSD</div>
            </div>
            <div class="flex items-center">
                <div class="w-40">Price: </div><input type="text" bind:value={priceRedeemSigmaUsd}><div class="ml-2">ERG</div>
            </div>
            <div class="flex items-center">
                <div class="w-40">Amount: </div><input type="text" bind:value={amountRedeemSigmaUsd}><div class="ml-2">SigmaUSD</div>
            </div>
            <TokenSlider bind:amount={valueERG} on:change={e => valueERG = e.detail} />
            <div class="flex items-center">
                <div class="w-40">Value: </div><input type="text" bind:value={valueERG}><div class="ml-2">ERG</div>
            </div>
            <button class="text-center w-full border py-2">SELL</button>
            <div class="flex items-center">
                <div class="w-40">Fee Total: </div><input type="text"><div class="ml-2">ERG</div>
            </div>
        </div>
    </div>
    <!-- BUY_SELL_SIGMA_USD -->

    <!-- BUY_SELL_SIGMA_RESERVE -->
    <div>

    </div>
    <!-- BUY_SELL_SIGMA_RESERVE -->
</div>

<style>
    input{
        padding-top: 0.25em;
        padding-bottom: 0.25em;
    }
</style>