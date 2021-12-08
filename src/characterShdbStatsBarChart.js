width = 600;

characterStatsData = [];

for (const characterId in characterStats) {
  stats = characterStats[characterId];
  for (const ability in stats) {
    entry = { character: CHARACTER_ID[characterId] };
    entry.ability = ability;
    entry.value = stats[ability];

    characterStatsData.push(entry);
  }
}

statsBarChart = GroupedBarChart(characterStatsData, {
  x: (d) => d.character,
  y: (d) => d.value,
  z: (d) => d.ability,
  xDomain: d3
    .groupSort(
      characterStatsData,
      (D) => d3.sum(D, (d) => -d.value),
      (d) => d.character
    )
    .slice(0, 6),
  yLabel: '↑ Score',
  zDomain: abilities,
  colors: abilityColors, // d3.schemeSpectral[abilities.length],
  width,
});

// statsBarChart = GroupedBarChart(stateages, {
//   x: (d) => d.state,
//   y: (d) => d.population / 1e6,
//   z: (d) => d.age,
//   xDomain: d3
//     .groupSort(
//       stateages,
//       (D) => d3.sum(D, (d) => -d.population),
//       (d) => d.state
//     )
//     .slice(0, 6), // top 6
//   yLabel: '↑ Population (millions)',
//   zDomain: ages,
//   colors: d3.schemeSpectral[ages.length],
//   width,
//   height: 500,
// });

// document.getElementById('stacked-bar').appendChild(statsBarChart);
