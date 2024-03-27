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
        background-color: theme(colors.red.400);
    }
</style>
