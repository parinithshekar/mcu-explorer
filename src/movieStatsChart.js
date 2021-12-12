function createOrderedMovieStatsChart(selectedMovieIds, stat, order) {
  width = 800;

  let movieStatsData = [];
  for (movieId of selectedMovieIds) {
    const movieEntry = {
      ...movieStats[movieId],
      id: movieId,
      name: MOVIE[movieId].name,
    };
    movieStatsData.push(movieEntry);
  }

  movieStatsData.sort((a, b) => {
    if (order.toLowerCase() === 'ascending') {
      return d3.ascending(a[stat], b[stat]);
    } else {
      return d3.descending(a[stat], b[stat]);
    }
  });

  orderedChart = BarChart(movieStatsData, {
    x: (d) => d.name,
    y: (d) => d[stat],
    yFormat: 's',
    yLabel: `↑ ${stat}`,
    width,
    height: 400,
    color: 'steelblue',
    duration: 750, // slow transition for demonstration
  });

  document.getElementById('sortable-bar').appendChild(orderedChart);
}

function updateOrderedMovieStatsChart(selectedMovieIds, stat, order) {
  alphabet.sort((a, b) => d3.descending(a.frequency, b.frequency));
  orderedChart.update(alphabet);
}
