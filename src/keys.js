const characterMasterData = {
  IRON_MAN: { name: 'Iron Man', nickname: 'I.Man', id: 1, color: '#DD4A48' },
  CAPTAIN_AMERICA: { name: 'Captain America', nickname: 'C.America', id: 2, color: '#344CB7' },
  THOR: { name: 'Thor', nickname: 'Thor', id: 3, color: '#FFCC1D' },
  THANOS: { name: 'Thanos', nickname: 'Thanos', id: 4, color: '#4C3F91' },
  HULK: { name: 'Hulk', nickname: 'Hulk', id: 5, color: '#064635' },
  LOKI: { name: 'Loki', nickname: 'Loki', id: 6, color: '#519259' },
  HAWKEYE: { name: 'Hawkeye', nickname: 'Hawkeye', id: 7, color: '#B05E27' },
  NICK_FURY: { name: 'Nick Fury', nickname: 'Nick Fury', id: 8, color: '#678983' },
  FALCON: { name: 'Falcon', nickname: 'Falcon', id: 9, color: '#6166B3' },
  BUCKY: { name: 'Bucky', nickname: 'Bucky', id: 10, color: '#87AAAA' },
  BLACK_PANTHER: { name: 'Black Panther', nickname: 'B.Panther', id: 11, color: '#864879' },
  ULTRON: { name: 'Ultron', nickname: 'Ultron', id: 12, color: '#B91646' },
  WANDA: { name: 'Wanda', nickname: 'Wanda', id: 13, color: '#CD1818' },
  VISION: { name: 'Vision', nickname: 'Vision', id: 14, color: '#D4AC2B' },
  ANT_MAN: { name: 'Antman', nickname: 'Antman', id: 15, color: '#A2416B' },
  SPIDER_MAN: { name: 'Spider-Man', nickname: 'Spiderman', id: 16, color: '#E02401' },
  NEBULA: { name: 'Nebula', nickname: 'Nebula', id: 17, color: '#1597E5' },
  CAPTAIN_MARVEL: { name: 'Captain Marvel', nickname: 'C.Marvel', id: 18, color: '#38A3A5' },
  GROOT: { name: 'Groot', nickname: 'Groot', id: 19, color: '#86340A' },
  STAR_LORD: { name: 'Star Lord', nickname: 'Star Lord', id: 20, color: '#FFB830' },
  DRAX: { name: 'Drax', nickname: 'Drax', id: 21, color: '#012443' },
  ROCKET: { name: 'Rocket', nickname: 'Rocket', id: 22, color: '#6F4C5B' },
  WASP: { name: 'Wasp', nickname: 'Wasp', id: 23, color: '#D5EEBB' },
  DOCTOR_STRANGE: { name: 'Doctor Strange', nickname: 'Dr.Strange', id: 24, color: '#71EFA3' },
  GAMORA: { name: 'Gamora', nickname: 'Gamora', id: 25, color: '#50CB93' },
  VULTURE: { name: 'Vulture', nickname: 'Vulture', id: 26, color: '#7C83FD' },
  WAR_MACHINE: { name: 'War Machine', nickname: 'W.Machine', id: 27, color: '#476072' },
  BLACK_WIDOW: { name: 'Black Widow', nickname: 'B.Widow', id: 28, color: '#8D2828' },
};
const CHARACTERS = Object.values(characterMasterData).map((characterInfo) => characterInfo.name);

const movieMasterData = {
  IRON_MAN: { name: 'Iron Man', nickname: 'IM1', id: 901, color: '#00ADB5' },
  THE_INCREDIBLE_HULK: { name: 'The Incredible Hulk', nickname: 'H1', id: 902, color: '#F9ED69' },
  IRON_MAN_2: { name: 'Iron Man 2', nickname: 'IM2', id: 903, color: '#F08A5D' },
  THOR: { name: 'Thor', nickname: 'Th1', id: 904, color: '#1FAB89' },
  CAPTAIN_AMERICA_FIRST_AVENGER: {
    name: 'Captain America: The First Avenger',
    nickname: 'CA:TFA',
    id: 905,
    color: '#EA5455',
  },
  AVENGERS: { name: 'The Avengers', nickname: 'AV', id: 906, color: '#F38181' },
  IRON_MAN_3: { name: 'Iron Man 3', nickname: 'IM3', id: 907, color: '#FFD460' },
  THOR_DARK_WORLD: { name: 'Thor: The Dark World', nickname: 'Th2', id: 908, color: '#FF2E63' },
  CAPTAIN_AMERICA_WINTER_SOLDIER: {
    name: 'Captain America: The Winter Soldier',
    nickname: 'CA:TWS',
    id: 909,
    color: '#8785A2',
  },
  GUARDIANS_OF_THE_GALAXY: {
    name: 'Guardians of the Galaxy',
    nickname: 'GotG',
    id: 910,
    color: '#71C9CE',
  },
  AVENGERS_AGE_OF_ULTRON: {
    name: 'Avengers: Age of Ultron',
    nickname: 'AV:AoU',
    id: 911,
    color: '#AA96DA',
  },
  ANT_MAN: { name: 'Ant-Man', nickname: 'AM', id: 912, color: '#364F6B' },
  CAPTAIN_AMERICA_CIVIL_WAR: {
    name: 'Captain America: Civil War',
    nickname: 'CA:CW',
    id: 913,
    color: '#3F72AF',
  },
  DOCTOR_STRANGE: { name: 'Doctor Strange', nickname: 'DS', id: 914, color: '#CCA8E9' },
  GUARDIANS_OF_THE_GALAXY_2: {
    name: 'Guardians of the Galaxy Vol. 2',
    nickname: 'GotG2',
    id: 915,
    color: '#30E3CA',
  },
  SPIDER_MAN_HOMECOMING: {
    name: 'Spider-Man: Homecoming',
    nickname: 'SM:H',
    id: 916,
    color: '#11999E',
  },
  THOR_RAGNAROK: { name: 'Thor: Ragnarok', nickname: 'Th3', id: 917, color: '#E84545' },
  BLACK_PANTHER: { name: 'Black Panther', nickname: 'BP', id: 918, color: '#6639A6' },
  AVENGERS_INFINITY_WAR: {
    name: 'Avengers: Infinity War',
    nickname: 'AV:IW',
    id: 919,
    color: '#3490DE',
  },
  ANT_MAN_AND_THE_WASP: {
    name: 'Ant-Man and the Wasp',
    nickname: 'AM:W',
    id: 920,
    color: '#6C5B7B',
  },
  CAPTAIN_MARVEL: { name: 'Captain Marvel', nickname: 'CM', id: 921, color: '#424874' },
  AVENGERS_ENDGAME: { name: 'Avengers: Endgame', nickname: 'AV:E', id: 922, color: '#FFC93C' },
  SPIDER_MAN_FAR_FROM_HOME: {
    name: 'Spider-Man: Far from Home',
    nickname: 'SM:FFH',
    id: 923,
    color: '#F07B3F',
  },
};
const MOVIES = Object.values(movieMasterData).map((movieInfo) => movieInfo.name);

// Create a reverse-map for use across the project
let CHARACTER = { ...characterMasterData };
for (key in characterMasterData) {
  const characterInfo = characterMasterData[key];
  for (subkey in characterInfo) {
    ignoreSubkeys = ['nickname', 'color'];
    if (ignoreSubkeys.includes(subkey)) {
      continue;
    }
    let subkeyInfo = characterInfo;
    subkeyInfo.key = key;
    CHARACTER[characterInfo[subkey]] = subkeyInfo;
  }
}

let MOVIE = { ...movieMasterData };
for (key in movieMasterData) {
  const movieInfo = movieMasterData[key];
  for (subkey in movieInfo) {
    ignoreSubkeys = ['nickname', 'color'];
    if (ignoreSubkeys.includes(subkey)) {
      continue;
    }
    let subkeyInfo = movieInfo;
    subkeyInfo.key = key;
    MOVIE[movieInfo[subkey]] = subkeyInfo;
  }
}
