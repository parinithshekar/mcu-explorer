function handleSelection(event, item) {
  // Selection of characters and movies changed and triggered this function
  selectedCharacters = characterDropdown.getSelected();
  selectedMovies = movieDropdown.getSelected();
  console.log(selectedCharacters);
}
