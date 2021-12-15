function createCharacterShdbStatsChart(selectedCharacterIds) {
  // Nothing selected
  if (!selectedCharacterIds.length) {
    const emptyMessage = d3
      .create('h3')
      .style('white-space', 'pre-line')
      .text('Select heores to visualize stats');
    document.getElementById('radar-chart').innerHTML = '';
    document.getElementById('radar-chart').appendChild(emptyMessage.node());
    return;
  }

  let characterStatsData = [];
  // Parse and prepare data for chart
  for (characterId in characterStats) {
    if (selectedCharacterIds.includes(Number(characterId))) {
      statsEntry = [];
      characterAbilities = characterStats[characterId];
      for (ability in characterAbilities) {
        // Tier is a confusing attribute which is not in the same scale
        if (ability === 'Tier') {
          continue;
        }
        abilityEntry = {
          axis: ability,
          // scaling abilities is useful when including Tier in the chart
          // value: scaleAbilityStat(ability, characterAbilities[ability]),
          value: characterAbilities[ability],
          realValue: characterAbilities[ability],
          characterId: characterId,
        };
        statsEntry.push(abilityEntry);
      }
      characterStatsData.push(statsEntry);
    }
  }

  // Plot the smallest polygon at the top
  characterStatsData.sort((a, b) => {
    aTotal = a.reduce((total, ability) => {
      return total + ability.value;
    }, 0);
    bTotal = b.reduce((total, ability) => {
      return total + ability.value;
    }, 0);
    // descending sort
    return bTotal - aTotal;
  });

  const characterColors = characterStatsData.map(
    (characterStats) => CHARACTER[characterStats[0].characterId].color
  );
  const characterNames = characterStatsData.map(
    (characterStats) => CHARACTER[characterStats[0].characterId].name
  );

  var margin = { top: 70, right: 70, bottom: 70, left: 70 },
    width = Math.min(500, window.innerWidth - 10) - margin.left - margin.right,
    height = Math.min(width, window.innerHeight - margin.top - margin.bottom - 20);

  var color = d3.scaleOrdinal().range(characterColors);

  var radarChartOptions = {
    w: width,
    h: height,
    margin: margin,
    maxValue: 100,
    levels: 5,
    roundStrokes: false,
    color: color,
    blobNames: characterNames,
  };
  //Call function to draw the Radar chart
  document.getElementById('radar-chart').innerHTML = '';
  RadarChart('#radar-chart', characterStatsData, radarChartOptions);
}
