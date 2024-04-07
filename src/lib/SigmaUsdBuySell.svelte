<script>
    import TokenSlider from "./TokenSlider.svelte";
    import { calculateSigUsdRateWithFee } from "./sigmaUsd/sigmaUsd";
    import { sigma_usd_bank_box, usd_erg_oracle_box } from "./sigmaUsd/store";
    let amountSigmaUsd  = 0;
    $: priceSigmaUsd = $sigma_usd_bank_box ? 10**-7 / calculateSigUsdRateWithFee(
        BigInt($sigma_usd_bank_box.value),
        BigInt($sigma_usd_bank_box.additionalRegisters.R4.renderedValue),
        BigInt($usd_erg_oracle_box.additionalRegisters.R4.renderedValue)/100n,
        BigInt(amountSigmaUsd*100),
        1n,
    ) : 0
    $: valueSigmaUsd = $sigma_usd_bank_box ? amountSigmaUsd * priceSigmaUsd : 0 ;
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
                <div class="w-20">Available: </div>
                <div>xxx</div>
                <div class="ml-1">ERG</div>
            </div>
            <div class="flex items-center">
                <div class="w-20">Price: </div><input type="text" bind:value={priceSigmaUsd}><div class="ml-2">ERG</div>
            </div>
            <div class="flex items-center">
                <div class="w-20">Amount: </div><input type="text" bind:value={amountSigmaUsd}><div class="ml-2">SigmaUSD</div>
            </div>
            <div>
                <TokenSlider bind:amount={amountSigmaUsd} on:change={e => amountSigmaUsd = e.detail} />
            </div>
            <div class="flex items-center">
                <div class="w-20">Value: </div><input type="text" bind:value={valueSigmaUsd}><div class="ml-2">ERG</div>
            </div>
            <div class="flex items-center">
                <div class="w-20">Fee Total: </div><input type="text"><div class="ml-2">ERG</div>
            </div>

            <button class="text-center w-full border py-2">BUY</button>
        </div>

                <div class="flex flex-col gap-2">
            <div class="flex items-center">
                <div class="w-20">Available: </div>
                <div>xxx</div>
                <div class="ml-1">SigmaUSD</div>
            </div>
            <div class="flex items-center">
                <div class="w-20">Price: </div><input type="text"><div class="ml-2">SigmaUSD</div>
            </div>
            <div class="flex items-center">
                <div class="w-20">Amount: </div><input type="text"><div class="ml-2">ERG</div>
            </div>
            <div class="flex items-center">
                <div class="w-20">Value: </div><input type="text"><div class="ml-2">SigmaUSD</div>
            </div>
            <div class="flex items-center">
                <div class="w-20">Fee Total: </div><input type="text"><div class="ml-2">ERG</div>
            </div>

            <button class="text-center w-full border py-2">SELL</button>
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