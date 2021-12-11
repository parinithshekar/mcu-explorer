function getLabelFromId(id) {
  nid = Number(id);
  if (nid) {
    return nid in CHARACTER ? CHARACTER[nid].name : MOVIE[nid].name;
  }
}
