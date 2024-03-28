<script>
    import RecentTrades from "$lib/RecentTrades.svelte";
    import SigmaUsdBuySell from "$lib/SigmaUsdBuySell.svelte";
    import SigmaUsdChart from "$lib/SigmaUsdChart.svelte";
</script>

<div>SigmaUsd</div>

<div class="flex">
    <div>
        <SigmaUsdChart></SigmaUsdChart>
        <SigmaUsdBuySell></SigmaUsdBuySell>
    </div>
    <div>
        <RecentTrades></RecentTrades>
    </div>
</div>

<style lang="postcss">
    :global(html) {
        /* background-color: theme(colors.red.100); */
        background-image: linear-gradient(to right, #f0f7fa, #e0e8ef);
    }
</style>
