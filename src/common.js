function getLabelFromId(id) {
  nid = Number(id);
  if (nid) {
    return nid in CHARACTER ? CHARACTER[nid].name : MOVIE[nid].name;
  }
}

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function formatStats(money) {
  if (money >= 10 ** 9) {
    return `${(+(money / 10 ** 9)).toFixed(1)}B`;
  } else if (money >= 10 ** 6) {
    return `${(+(money / 10 ** 6)).toFixed(1)}M`;
  } else if (money >= 10 ** 3) {
    return `${(+(money / 10 ** 3)).toFixed(1)}K`;
  } else {
    return money;
  }
}
