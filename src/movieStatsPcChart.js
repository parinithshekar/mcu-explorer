function createParallelCoordinateChart(selectedMovieIds) {
  if (!selectedMovieIds.length) {
    const emptyMessage = d3
      .create('h3')
      .style('white-space', 'pre-line')
      .text('Select some movies to compare their stats!');
    document.getElementById('parallel-coo-chart').innerHTML = '';
    document.getElementById('parallel-coo-chart').appendChild(emptyMessage.node());
    return;
  }

  movieStatsData = selectedMovieIds.map((movieId) => {
    return {
      ...movieStats[movieId],
      id: movieId,
      name: MOVIE[movieId].name,
    };
  });

  const movieStatsPcChart = ParallelCoordinateChart(movieStatsData, ['id', 'name', 'year']);

  document.getElementById('parallel-coo-chart').innerHTML = '';
  document.getElementById('parallel-coo-chart').appendChild(movieStatsPcChart);
}
