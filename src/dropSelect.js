characterOriginList = Object.values(CHARACTER_ID);
moviesOriginList = Object.values(MOVIE_ID);

characterDestinationList = [CHARACTER.IRON_MAN.name, CHARACTER.THANOS.name];

movieDestinationList = [MOVIE.AVENGERS_INFINITY_WAR.name, MOVIE.AVENGERS_ENDGAME.name];

var characterSelect = sellect('#character-select', {
  originList: characterOriginList,
  destinationList: characterDestinationList,
  onInsert: handleCharacterListChange,
  onRemove: handleCharacterListChange,
});

var movieSelect = sellect('#movie-select', {
  originList: moviesOriginList,
  destinationList: movieDestinationList,
  onInsert: handleMovieListChange,
  onRemove: handleMovieListChange,
});

function handleCharacterListChange(event, item) {
  newCharacterList = characterSelect.getSelected();
  console.log(newCharacterList);
}

function handleMovieListChange(event, item) {
  newMovieList = movieSelect.getSelected();
  console.log(newMovieList);
}

characterSelect.init();
movieSelect.init();
