function createParallelCoordinateChart(selectedMovieIds) {
  // Nothing selected
  if (!selectedMovieIds.length) {
    const emptyMessage = d3
      .create('h3')
      .style('white-space', 'pre-line')
      .text('Select some movies to compare their stats!');
    document.getElementById('parallel-coo-chart').innerHTML = '';
    document.getElementById('parallel-coo-chart').appendChild(emptyMessage.node());
    return;
  }

  // Parse and prepare data for chart
  movieStatsData = selectedMovieIds.map((movieId) => {
    return {
      ...movieStats[movieId],
      id: movieId,
      name: MOVIE[movieId].name,
    };
  });

  // Custom scales for each movieStat
  statNames = Object.keys(movieStats[selectedMovieIds[0]]);
  statsDomain = {};
  statNames.map(
    (movieStat) =>
      (statsDomain[movieStat] = [
        0,
        d3.max(Object.values(movieStats), (d) => +d[movieStat]) +
          d3.min(Object.values(movieStats), (d) => +d[movieStat]),
      ])
  );
  // Set awards and nominations to have same scale
  statsDomain['awards'] = statsDomain['nominations'];

  // Build chart
  const movieStatsPcChart = ParallelCoordinateChart(movieStatsData, statsDomain, [
    'id',
    'name',
    'year',
  ]);

  // Populate it in DOM
  document.getElementById('parallel-coo-chart').innerHTML = '';
  document.getElementById('parallel-coo-chart').appendChild(movieStatsPcChart);
}
