function createCharacterWordsChart(selectedCharacterIds, selectedMovieIds) {
  width = 750;
  height = 650;

  // TODO Need to avoid zeroes in this data before passing to chart
  characterWordsData = [];

  for (movieId in characterWords) {
    if (selectedMovieIds.includes(Number(movieId))) {
      for (characterId in characterWords[movieId]) {
        if (selectedCharacterIds.includes(Number(characterId))) {
          entry = { movieId };
          entry.character = CHARACTER[characterId].nickname.split(' ').join('\n');
          entry.movie = MOVIE[movieId].name;
          if (characterId in characterWords[movieId]) {
            entry.words = characterWords[movieId][characterId];
          } else {
            continue;
          }

          characterWordsData.push(entry);
        }
      }
    }
  }

  const selectedMovieNames = selectedMovieIds.map((movieId) => MOVIE[movieId].name);
  let colorMapping = {};
  selectedMovieIds.map((movieId) => (colorMapping[MOVIE[movieId].name] = MOVIE[movieId].color));

  screenTimeBarChart = StackedBarChart(characterWordsData, {
    x: (d) => d.words,
    y: (d) => d.character,
    z: (d) => d.movie,
    xLabel: 'Words →',
    yDomain: d3.groupSort(
      characterWordsData,
      (D) => d3.sum(D, (d) => d.words),
      (d) => d.character
    ), // sort y by x
    zDomain: MOVIES,
    colors: d3.schemeSpectral[MOVIES.length],
    colorMapping,
    width,
    height,
  });

  // update chart in div
  document.getElementById('character-words').innerHTML = '';
  document.getElementById('character-words').appendChild(screenTimeBarChart);
}
