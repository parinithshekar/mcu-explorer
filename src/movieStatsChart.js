function createOrderedMovieStatsChart(selectedMovieIds, yStat, sortStat, sortOrder) {
  width = 1200;

  let movieStatsData = [];
  for (movieId of selectedMovieIds) {
    const movieEntry = {
      ...movieStats[movieId],
      id: movieId,
      name: MOVIE[movieId].name,
      nickname: MOVIE[movieId].nickname
    };
    movieStatsData.push(movieEntry);
  }

  movieStatsData.sort((a, b) => {
    if (sortOrder.toLowerCase() === 'ascending') {
      return d3.ascending(a[sortStat], b[sortStat]);
    } else {
      return d3.descending(a[sortStat], b[sortStat]);
    }
  });

  orderedChart = BarChart(movieStatsData, {
    x: (d) => d.nickname,
    y: (d) => d[yStat],
    yFormat: 's',
    yLabel: `↑ ${capitalizeFirstLetter(yStat)}`,
    width,
    height: 400,
    color: 'steelblue',
    duration: 750, // slow transition for demonstration
  });

  document.getElementById('sortable-bar').innerHTML = '';
  document.getElementById('sortable-bar').appendChild(orderedChart);
}

function updateOrderedMovieStatsChart(selectedMovieIds, sortStat, sortOrder) {
  alphabet.sort((a, b) => d3.descending(a.frequency, b.frequency));
  orderedChart.update(alphabet);
}

function optimizeTitle(title) {
  let subtitles = title.split(':');
  subtitles = subtitles.map(sub => sub.trim())
  return subtitles.join('\n');
}
