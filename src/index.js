characterOriginList = Object.values(characterMasterData).map((characterInfo) => characterInfo.name);
moviesOriginList = Object.values(movieMasterData).map((movieInfo) => movieInfo.name);

characterDestinationList = [
  CHARACTER.IRON_MAN.name,
  CHARACTER.THANOS.name,
  CHARACTER.CAPTAIN_AMERICA.name,
  CHARACTER.THOR.name,
];

movieDestinationList = [
  MOVIE.AVENGERS_INFINITY_WAR.name,
  MOVIE.AVENGERS_ENDGAME.name,
  MOVIE.THOR.name,
  MOVIE.CAPTAIN_AMERICA_FIRST_AVENGER.name,
];

var characterDropdown = sellect('#character-select', {
  originList: characterOriginList,
  destinationList: characterDestinationList,
  onInsert: handleSelection,
  onRemove: handleSelection,
});

var movieDropdown = sellect('#movie-select', {
  originList: moviesOriginList,
  destinationList: movieDestinationList,
  onInsert: handleSelection,
  onRemove: handleSelection,
});

characterDropdown.init();
movieDropdown.init();

function handleSelection(event, item) {
  // Selection of characters and movies changed and triggered this function
  selectedCharacterIds = characterDropdown
    .getSelected()
    .map((characterName) => CHARACTER[characterName].id);
  selectedMovieIds = movieDropdown.getSelected().map((movieName) => MOVIE[movieName].id);
  updateAllCharts(selectedCharacterIds, selectedMovieIds);
}

function handleSankeySelection(radio) {
  // Selection of characters and movies changed and triggered this function
  selectedCharacterIds = characterDropdown
    .getSelected()
    .map((characterName) => CHARACTER[characterName].id);
  selectedMovieIds = movieDropdown.getSelected().map((movieName) => MOVIE[movieName].id);
  // console.log(radio.value);
  createCharacterMovieSankeyChart(selectedCharacterIds, selectedMovieIds, radio.value);
}

function updateAllCharts(selectedCharacterIds, selectedMovieIds) {
  createCharacterShdbStatsChart(selectedCharacterIds);
  createCharactersScreenTimeChart(selectedCharacterIds, selectedMovieIds);
  createCharacterWordsChart(selectedCharacterIds, selectedMovieIds);
  createCharacterMovieSankeyChart(selectedCharacterIds, selectedMovieIds, 'screenTime');
  createOrderedMovieStatsChart(selectedMovieIds, 'gross', 'descending');
}

handleSelection(null, null);
