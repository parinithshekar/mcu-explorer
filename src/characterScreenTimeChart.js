function createCharactersScreenTimeChart(selectedCharacterIds, selectedMovieIds) {
  width = 750;
  height = 650;

  // TODO Need to avoid zeroes in this data before passing to chart
  characterScreenTimeData = [];

  for (movieId in characterScreenTime) {
    if (selectedMovieIds.includes(Number(movieId))) {
      for (characterId in characterScreenTime[movieId]) {
        if (selectedCharacterIds.includes(Number(characterId))) {
          entry = { movieId };
          entry.character = CHARACTER[characterId].nickname.split(' ').join('\n');
          entry.movie = MOVIE[movieId].name;
          entry.words = characterScreenTime[movieId][characterId];

          characterScreenTimeData.push(entry);
        }
      }
    }
  }

  if (!characterScreenTimeData.length) {
    const emptyMessage = d3
      .create('h3')
      .style('white-space', 'pre-line')
      .text(
        'No screen time data on selected characters and movies\nSelect some characters and movies!'
      );
    document.getElementById('character-screen-time').innerHTML = '';
    document.getElementById('character-screen-time').appendChild(emptyMessage.node());
    return;
  }

  let colorMapping = {};
  selectedMovieIds.map((movieId) => (colorMapping[MOVIE[movieId].name] = MOVIE[movieId].color));

  screenTimeBarChart = StackedBarChart(characterScreenTimeData, {
    x: (d) => d.words,
    y: (d) => d.character,
    z: (d) => d.movie,
    xLabel: 'Minutes →',
    yDomain: d3.groupSort(
      characterScreenTimeData,
      (D) => d3.sum(D, (d) => d.words),
      (d) => d.character
    ), // sort y by x
    zDomain: MOVIES,
    xFormat: '0.1s',
    colors: d3.schemeSpectral[MOVIES.length],
    colorMapping,
    width,
    height,
  });

  document.getElementById('character-screen-time').innerHTML = '';
  document.getElementById('character-screen-time').appendChild(screenTimeBarChart);
}
