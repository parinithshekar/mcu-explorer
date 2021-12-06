width = 500;

screenTimeBarChart = StackedBarChart(stateages, {
  x: (d) => d.population / 1e6,
  y: (d) => d.state,
  z: (d) => d.age,
  xLabel: 'Population (millions) →',
  yDomain: d3.groupSort(
    stateages,
    (D) => d3.sum(D, (d) => d.population),
    (d) => d.state
  ), // sort y by x
  zDomain: ages,
  colors: d3.schemeSpectral[ages.length],
  width,
  height: 600,
});

document.getElementById('chart').appendChild(screenTimeBarChart);
