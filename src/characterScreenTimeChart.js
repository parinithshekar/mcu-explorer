function createCharactersScreenTimeChart(selectedCharacterIds, selectedMovieIds) {
  width = 750;

  // TODO Need to avoid zeroes in this data before passing to chart
  characterWordsData = [];

  for (movieId in characterWords) {
    if (selectedMovieIds.includes(Number(movieId))) {
      for (characterId in characterWords[movieId]) {
        if (selectedCharacterIds.includes(Number(characterId))) {
          entry = {};
          entry.character = CHARACTER[characterId].nickname.split(' ').join('\n');
          entry.movie = MOVIE[movieId].name;
          entry.words = characterWords[movieId][characterId];

          characterWordsData.push(entry);
        }
      }
    }
  }

  screenTimeBarChart = StackedBarChart(characterWordsData, {
    x: (d) => d.words,
    y: (d) => d.character,
    z: (d) => d.movie,
    xLabel: 'Minutes →',
    yDomain: d3.groupSort(
      characterWordsData,
      (D) => d3.sum(D, (d) => d.words),
      (d) => d.character
    ), // sort y by x
    zDomain: MOVIES,
    colors: d3.schemeSpectral[MOVIES.length],
    width,
  });

  document.getElementById('character-screen-time').innerHTML = "";
  document.getElementById('character-screen-time').appendChild(screenTimeBarChart);
}
