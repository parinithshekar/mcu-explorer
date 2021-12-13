function createCharacterMovieSankeyChart(selectedCharacterIds, selectedMovieIds, sankeyParameter) {
  width = 1600;

  const dataSource = sankeyParameter === 'screenTime' ? characterScreenTime : characterWords;
  const unit = sankeyParameter === 'screenTime' ? 'mins' : 'words';

  nodeList = [];
  linksList = [];

  // Prepare links
  for (movieId of selectedMovieIds) {
    const characterTimes = dataSource[movieId];
    // Some movies not present in
    if (!characterTimes) {
      continue;
    }
    for (characterId of selectedCharacterIds) {
      if (characterId in characterTimes) {
        linksList.push({
          source: String(CHARACTER[characterId].id),
          target: String(MOVIE[movieId].id),
          value: characterTimes[characterId],
        });
      }
    }
  }

  // Prepare nodes
  sankeyCharacterIds = [ ...new Set(linksList.map(link => link.source)) ]
  sankeyMovieIds = [ ...new Set(linksList.map(link => link.target)) ]
  sankeyCharacterIds.map((characterId) => {
    nodeList.push({
      id: String(CHARACTER[characterId].id),
      label: CHARACTER[characterId].name,
    });
  });
  sankeyMovieIds.map((movieId) => {
    if (dataSource[movieId]) {
      nodeList.push({
        id: String(MOVIE[movieId].id),
        label: MOVIE[movieId].name,
      });
    }
  });

  charactersAndMoviesCrownChart = SankeyChart(
    { links: linksList, nodes: nodeList },
    {
      nodeGroup: (d) => d.id.split(/\W/)[0],
      nodeAlign: 'justify',
      linkColor: 'source-target',
      format: (
        (f) => (d) =>
          `${f(d)} ${unit}`
      )(d3.format(',.1~f')),
      width,
      height: 600,
    }
  );

  document.getElementById('characters-movies-crown').innerHTML = '';
  document.getElementById('characters-movies-crown').appendChild(charactersAndMoviesCrownChart);
}
