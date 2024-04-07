<script lang="ts">
    import { onMount } from 'svelte';
    import { createChart } from 'lightweight-charts';
  
    let chartContainer: HTMLElement;
  
    onMount(() => {
      const chart = createChart(chartContainer, { width: chartContainer.offsetWidth, height: 300 });
      const candleSeries = chart.addCandlestickSeries();
  
      candleSeries.setData([
        { time: '2019-04-11', open: 80.01, high: 96.63, low: 75.01, close: 90.63 },
        { time: '2019-04-12', open: 91.63, high: 95.64, low: 80.89, close: 81.89 },
        { time: '2019-04-13', open: 83.01, high: 88.63, low: 79.05, close: 87.63 },
        { time: '2019-04-14', open: 87.45, high: 95.00, low: 85.75, close: 93.89 },
        { time: '2019-04-15', open: 94.10, high: 95.65, low: 88.42, close: 90.12 },
        { time: '2019-04-16', open: 90.12, high: 90.12, low: 90.12, close: 90.12 },
        { time: '2019-04-17', open: 90.12, high: 95.65, low: 88.42, close: 94.10},
        // Add more data as needed
      ]);
  
      window.addEventListener('resize', () => {
        chart.applyOptions({ width: chartContainer.offsetWidth });
      });
    });
  </script>
  
  <div bind:this={chartContainer} style="height: 300px;"></div>
  