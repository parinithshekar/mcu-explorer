width = 800;

// TODO Need to avoid zeroes in this data before passing to chart
characterWordsData = [];

for (movieId in characterWords) {
  for (characterId in characterWords[movieId]) {
    entry = { character: CHARACTER[characterId].name, movie: MOVIE[movieId].name };
    entry.words = characterWords[movieId][characterId];

    characterWordsData.push(entry);
  }
}

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
  width,
});

document.getElementById('character-words').appendChild(screenTimeBarChart);
