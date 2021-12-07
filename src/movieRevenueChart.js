width = 800;

orderedChart = BarChart(alphabet, {
  x: (d) => d.letter,
  y: (d) => d.frequency,
  yFormat: '%',
  yLabel: '↑ Frequency',
  width,
  height: 500,
  color: 'steelblue',
  duration: 750, // slow transition for demonstration
});

document.getElementById('sortable-bar').appendChild(orderedChart);

alphabet.sort((a, b) => d3.descending(a.frequency, b.frequency));
orderedChart.update(alphabet);
