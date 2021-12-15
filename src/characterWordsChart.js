function createCharacterWordsChart(selectedCharacterIds, selectedMovieIds) {
  width = 750;
  height = 650;

  characterWordsData = [];

  // Parse and prepare data for chart
  for (movieId in characterWords) {
    if (selectedMovieIds.includes(Number(movieId))) {
      for (characterId in characterWords[movieId]) {
        if (selectedCharacterIds.includes(Number(characterId))) {
          entry = { movieId };
          entry.character = CHARACTER[characterId].nickname.split(' ').join('\n');
          entry.movie = MOVIE[movieId].name;
          entry.characterFullName = CHARACTER[characterId].name;
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

  // Create custom color mapping
  let colorMapping = {};
  selectedMovieIds.map((movieId) => (colorMapping[MOVIE[movieId].name] = MOVIE[movieId].color));

  // No data on selected characters to show
  if (!characterWordsData.length) {
    const emptyMessage = d3
      .create('h3')
      .style('white-space', 'pre-line')
      .text(
        'No dialogues data on selected characters and movies\nSelect some characters and movies!'
      );
    document.getElementById('character-words').innerHTML = '';
    document.getElementById('character-words').appendChild(emptyMessage.node());
    return;
  }

  // Build chart
  screenTimeBarChart = StackedBarChart(characterWordsData, {
    x: (d) => d.words,
    y: (d) => d.character,
    z: (d) => d.movie,
    l: (d) => d.characterFullName,
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

  // Populate it in DOM
  document.getElementById('character-words').innerHTML = '';
  document.getElementById('character-words').appendChild(screenTimeBarChart);
}
