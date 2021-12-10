characterOriginList = Object.values(characterMasterData).map((characterInfo) => characterInfo.name);
moviesOriginList = Object.values(movieMasterData).map((movieInfo) => movieInfo.name);

characterDestinationList = [CHARACTER.IRON_MAN.name, CHARACTER.THANOS.name];

movieDestinationList = [MOVIE.AVENGERS_INFINITY_WAR.name, MOVIE.AVENGERS_ENDGAME.name];

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
