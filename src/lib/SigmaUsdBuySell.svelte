<script>

    import TokenSlider from "./TokenSlider.svelte";

</script>
<div>
    <!-- BUY_SELL_SIGMA_USD -->
    <div class="flex gap-10">
        <div class="flex flex-col gap-2">
            <div class="flex items-center">
                <div class="w-20">Available: </div>
                <div>xxx</div>
                <div class="ml-1">ERG</div>
            </div>
            <div class="flex items-center">
                <div class="w-20">Price: </div><input type="text"><div class="ml-2">ERG</div>
            </div>
            <div class="flex items-center">
                <div class="w-20">Amount: </div><input type="text"><div class="ml-2">SigmaUSD</div>
            </div>
            <div>
                <TokenSlider></TokenSlider>
            </div>
            <div class="flex items-center">
                <div class="w-20">Value: </div><input type="text"><div class="ml-2">ERG</div>
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