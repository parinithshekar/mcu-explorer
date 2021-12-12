function getLabelFromId(id) {
  nid = Number(id);
  if (nid) {
    return nid in CHARACTER ? CHARACTER[nid].name : MOVIE[nid].name;
  }
}

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
