<script>
    import SigmaUsdBuySell from "$lib/SigmaUsdBuySell.svelte";
    import SigmaUsdChart from "$lib/SigmaUsdChart.svelte";

</script>
<SigmaUsdChart></SigmaUsdChart>
<SigmaUsdBuySell></SigmaUsdBuySell>
  
<style lang="postcss">
:global(html) {
    background-color: theme(colors.red.400);
}
</style>