// Options to select
characterOriginList = Object.values(characterMasterData).map((characterInfo) => characterInfo.name);
moviesOriginList = Object.values(movieMasterData).map((movieInfo) => movieInfo.name);

// All
// characterDestinationList = Object.values(characterMasterData).map((character) => character.name);
// movieDestinationList = Object.values(movieMasterData).map((movie) => movie.name);

// Default selections
characterDestinationList = [
  CHARACTER.IRON_MAN.name,
  CHARACTER.THANOS.name,
  CHARACTER.CAPTAIN_AMERICA.name,
  CHARACTER.THOR.name,
  CHARACTER.BLACK_PANTHER.name,
];
movieDestinationList = [
  MOVIE.AVENGERS_INFINITY_WAR.name,
  MOVIE.AVENGERS_ENDGAME.name,
  MOVIE.THOR.name,
  MOVIE.CAPTAIN_AMERICA_FIRST_AVENGER.name,
  MOVIE.BLACK_PANTHER.name,
];

// Build character and movie selections
var characterDropdown = sellect('#character-select', {
  originList: characterOriginList,
  destinationList: characterDestinationList,
  type: 'character',
  onInsert: handleSelection,
  onRemove: handleSelection,
});

var movieDropdown = sellect('#movie-select', {
  originList: moviesOriginList,
  destinationList: movieDestinationList,
  type: 'movie',
  onInsert: handleSelection,
  onRemove: handleSelection,
});

characterDropdown.init();
movieDropdown.init();

function handleSelection(event, item) {
  // Selection of characters and movies changed
  selectedCharacterIds = characterDropdown
    .getSelected()
    .map((characterName) => CHARACTER[characterName].id);
  selectedMovieIds = movieDropdown.getSelected().map((movieName) => MOVIE[movieName].id);
  updateAllCharts(selectedCharacterIds, selectedMovieIds);
}

function handleSankeySelection(radio) {
  // Selection of the sankey links weight
  selectedCharacterIds = characterDropdown
    .getSelected()
    .map((characterName) => CHARACTER[characterName].id);
  selectedMovieIds = movieDropdown.getSelected().map((movieName) => MOVIE[movieName].id);
  createCharacterMovieSankeyChart(selectedCharacterIds, selectedMovieIds, radio.value);
}

function handleBarChartSelection() {
  // Selection of ordered bar chart options
  const barYSelect = document.getElementById('barY');
  const barY = barYSelect.options[barYSelect.selectedIndex].value;

  const barSortSelect = document.getElementById('barSort');
  const barSort = barSortSelect.options[barSortSelect.selectedIndex].value;

  const barOrderSelect = document.getElementById('barOrder');
  const barOrder = barOrderSelect.options[barOrderSelect.selectedIndex].value;

  const selectedMovieIds = movieDropdown.getSelected().map((movieName) => MOVIE[movieName].id);

  createOrderedMovieStatsChart(selectedMovieIds, barY, barSort, barOrder);
}

function handleSankeyColorSelection() {
  // Selection of sankey color
  selectedCharacterIds = characterDropdown
    .getSelected()
    .map((characterName) => CHARACTER[characterName].id);
  selectedMovieIds = movieDropdown.getSelected().map((movieName) => MOVIE[movieName].id);

  // Get other sankey parameters
  const sankeyParam = document.querySelector('input[name="sankeyParam"]:checked').value;
  const sankeyColorSelect = document.getElementById('sankeyColor');
  const sankeyColor = sankeyColorSelect.options[sankeyColorSelect.selectedIndex].value;

  // Create sankey chart
  createCharacterMovieSankeyChart(selectedCharacterIds, selectedMovieIds, sankeyParam, sankeyColor);
}

function updateAllCharts(selectedCharacterIds, selectedMovieIds) {
  createCharacterShdbStatsChart(selectedCharacterIds);
  createCharactersScreenTimeChart(selectedCharacterIds, selectedMovieIds);
  createCharacterWordsChart(selectedCharacterIds, selectedMovieIds);

  const sankeyParam = document.querySelector('input[name="sankeyParam"]:checked').value;
  const sankeyColorSelect = document.getElementById('sankeyColor');
  const sankeyColor = sankeyColorSelect.options[sankeyColorSelect.selectedIndex].value;
  createCharacterMovieSankeyChart(selectedCharacterIds, selectedMovieIds, sankeyParam, sankeyColor);

  // Create ordered bar chart
  handleBarChartSelection();

  createParallelCoordinateChart(selectedMovieIds);
}

handleSelection(null, null);
