width = 600;

statsBarChart = GroupedBarChart(stateages, {
  x: (d) => d.state,
  y: (d) => d.population / 1e6,
  z: (d) => d.age,
  xDomain: d3
    .groupSort(
      stateages,
      (D) => d3.sum(D, (d) => -d.population),
      (d) => d.state
    )
    .slice(0, 6), // top 6
  yLabel: '↑ Population (millions)',
  zDomain: ages,
  colors: d3.schemeSpectral[ages.length],
  width,
  height: 500,
});

document.getElementById('stacked-bar').appendChild(statsBarChart);
