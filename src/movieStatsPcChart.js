function createParallelCoordinateChart(selectedMovieIds) {
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
