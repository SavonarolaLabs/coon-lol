<script>
    let amount = 0;
    $: gradient = `linear-gradient(to right, #6e6d6d 0%, #6e6d6d ${amount}%, #d3d3d3 ${amount}%, #d3d3d3 100%)`;
    $: leftColor = amount >= 25 ? '#6e6d6d' : '#d3d3d3';
    $: middleLeftColor = amount >= 50 ? '#6e6d6d' : '#d3d3d3';
    $: middleRightColor = amount >= 75 ? '#6e6d6d' : '#d3d3d3';
    $: rightColor = amount >= 100 ? '#6e6d6d' : '#d3d3d3';
  </script>
  

  
  <div class="slider-container">
    <input type="range" min="0" max="100" bind:value={amount} style="--gradient: {gradient}"/>
    <span class="tooltip" style="left: calc({amount}% * 0.95);">{amount}%</span>
    <div class="marker-container">
        <div class="marker marker-0" style="background-color: #6e6d6d;"></div>
        <div class="marker marker-25" style="background-color: {leftColor};"></div>
        <div class="marker marker-50" style="background-color: {middleLeftColor};"></div>
        <div class="marker marker-75" style="background-color: {middleRightColor};"></div>
        <div class="marker marker-100" style="background-color: {rightColor};"></div>
    </div>
  </div>

  <style lang="postcss">
    .slider-container {
      max-width: 600px;
      position: relative;
    }
    
    input[type="range"] {
        margin-top: 1em;
        margin-bottom:1em;
      -webkit-appearance: none;
      width: 100%;
      height: 6px;
      border-radius: 4px;
      background: #d3d3d3;
      outline: none;
      padding: 0;
      position: relative;
      z-index: 2;
      background: var(--gradient);
    }
    
    input[type="range"]::-webkit-slider-thumb {
      -webkit-appearance: none;
      appearance: none;
      width: 16px;
      height: 16px;
      border-radius: 50%;
      background: #ffffff;
      cursor: pointer;
      border: 1px solid grey;
      z-index: 3;
      position: relative;
    }
  
    .tooltip {
      width: 44px;
      position: absolute;
      bottom: 100%;
      left: 0%;
      background-color: white;
      color: black;
      text-align: center;
      padding: 5px 2px;
      border-radius: 6px;
      font-size: 14px;
      line-height: 1;
      visibility: hidden;
    }
  
    input[type="range"]:hover + .tooltip {
      visibility: visible;
    }
  
    .marker-container {
      position: absolute;
      top: 50%;
      left: 7px;
      right: 7px;
      width: auto;
      transform: translateY(50%);
      z-index: 1;
    }
  
    .marker {
      position: absolute;
      background-color: #d3d3d3;
      width: 14px;
      height: 14px;
      border-radius: 50%;
      transform: translate(-50%, -50%);
    }
  
    .marker-0 { left: 0px; }
    .marker-25 { left: calc(25% + 1px); }
    .marker-50 { left: calc(50% - 0px); }
    .marker-75 { left: calc(75% - 1px); }
    .marker-100 { right: -14px; }
  </style>
  