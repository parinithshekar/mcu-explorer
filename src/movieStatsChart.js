function createOrderedMovieStatsChart(selectedMovieIds, yStat, sortStat, sortOrder) {
  if (!selectedMovieIds.length) {
    const emptyMessage = d3
      .create('h3')
      .style('white-space', 'pre-line')
      .text('Select some movies to compare their stats!');
    document.getElementById('sortable-bar').innerHTML = '';
    document.getElementById('sortable-bar').appendChild(emptyMessage.node());
    return;
  }

  width = 1200;

  let movieStatsData = [];
  for (movieId of selectedMovieIds) {
    const movieEntry = {
      ...movieStats[movieId],
      id: movieId,
      name: MOVIE[movieId].name,
      nickname: MOVIE[movieId].nickname,
    };
    movieStatsData.push(movieEntry);
  }

  movieStatsData.sort((a, b) => {
    if (sortOrder.toLowerCase() === 'ascending') {
      return a[sortStat] == b[sortStat]
        ? d3.ascending(a.id, b.id)
        : d3.ascending(a[sortStat], b[sortStat]);
    } else {
      return a[sortStat] == b[sortStat]
        ? d3.descending(a.id, b.id)
        : d3.descending(a[sortStat], b[sortStat]);
    }
  });

  const customColors = movieStatsData.map(({ id }) => colorForId(id));
  orderedChart = BarChart(movieStatsData, {
    x: (d) => d.nickname,
    y: (d) => d[yStat],
    yFormat: 's',
    yLabel: `↑ ${capitalizeFirstLetter(yStat)}`,
    width,
    height: 400,
    color: 'steelblue',
    customColors,
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
  subtitles = subtitles.map((sub) => sub.trim());
  return subtitles.join('\n');
}
