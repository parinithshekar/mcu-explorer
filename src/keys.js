const characterMasterData = {
  IRON_MAN: { name: 'Iron Man', nickname: 'I.Man', id: 1, color: '#ae2012' },
  CAPTAIN_AMERICA: { name: 'Captain America', nickname: 'C.America', id: 2, color: '#023e8a' },
  THOR: { name: 'Thor', nickname: 'Thor', id: 3, color: '#faa307' },
  THANOS: { name: 'Thanos', nickname: 'Thanos', id: 4, color: '#7209b7' },
  HULK: { name: 'Hulk', nickname: 'Hulk', id: 5, color: '' },
  LOKI: { name: 'Loki', nickname: 'Loki', id: 6, color: '' },
  HAWKEYE: { name: 'Hawkeye', nickname: 'Hawkeye', id: 7, color: '' },
  NICK_FURY: { name: 'Nick Fury', nickname: 'Nick Fury', id: 8, color: '' },
  FALCON: { name: 'Falcon', nickname: 'Falcon', id: 9, color: '' },
  BUCKY: { name: 'Bucky', nickname: 'Bucky', id: 10, color: '' },
  BLACK_PANTHER: { name: 'Black Panther', nickname: 'B.Panther', id: 11, color: '' },
  ULTRON: { name: 'Ultron', nickname: 'Ultron', id: 12, color: '' },
  WANDA: { name: 'Wanda', nickname: 'Wanda', id: 13, color: '' },
  VISION: { name: 'Vision', nickname: 'Vision', id: 14, color: '' },
  ANT_MAN: { name: 'Antman', nickname: 'Antman', id: 15, color: '' },
  SPIDER_MAN: { name: 'Spider-Man', nickname: 'Spiderman', id: 16, color: '' },
  NEBULA: { name: 'Nebula', nickname: 'Nebula', id: 17, color: '' },
  CAPTAIN_MARVEL: { name: 'Captain Marvel', nickname: 'C.Marvel', id: 18, color: '' },
  GROOT: { name: 'Groot', nickname: 'Groot', id: 19, color: '' },
  STAR_LORD: { name: 'Star Lord', nickname: 'Star Lord', id: 20, color: '' },
  DRAX: { name: 'Drax', nickname: 'Drax', id: 21, color: '' },
  ROCKET: { name: 'Rocket', nickname: 'Rocket', id: 22, color: '' },
  WASP: { name: 'Wasp', nickname: 'Wasp', id: 23, color: '' },
  DOCTOR_STRANGE: { name: 'Doctor Strange', nickname: 'Dr.Strange', id: 24, color: '' },
  GAMORA: { name: 'Gamora', nickname: 'Gamora', id: 25, color: '' },
  VULTURE: { name: 'Vulture', nickname: 'Vulture', id: 26, color: '' },
  WAR_MACHINE: { name: 'War Machine', nickname: 'W.Machine', id: 27, color: '' },
  BLACK_WIDOW: { name: 'Black Widow', nickname: 'B.Widow', id: 28, color: '' },
};
const CHARACTERS = Object.values(characterMasterData).map((characterInfo) => characterInfo.name);

const movieMasterData = {
  IRON_MAN: { name: 'Iron Man', id: 901 },
  THE_INCREDIBLE_HULK: { name: 'The Incredible Hulk', id: 902 },
  IRON_MAN_2: { name: 'Iron Man 2', id: 903 },
  THOR: { name: 'Thor', id: 904 },
  CAPTAIN_AMERICA_FIRST_AVENGER: { name: 'Captain America: The First Avenger', id: 905 },
  AVENGERS: { name: 'The Avengers', id: 906 },
  IRON_MAN_3: { name: 'Iron Man 3', id: 907 },
  THOR_DARK_WORLD: { name: 'Thor: The Dark World', id: 908 },
  CAPTAIN_AMERICA_WINTER_SOLDIER: { name: 'Captain America: The Winter Soldier', id: 909 },
  GUARDIANS_OF_THE_GALAXY: { name: 'Guardians of the Galaxy', id: 910 },
  AVENGERS_AGE_OF_ULTRON: { name: 'Avengers: Age of Ultron', id: 911 },
  ANT_MAN: { name: 'Ant-Man', id: 912 },
  CAPTAIN_AMERICA_CIVIL_WAR: { name: 'Captain America: Civil War', id: 913 },
  DOCTOR_STRANGE: { name: 'Doctor Strange', id: 914 },
  GUARDIANS_OF_THE_GALAXY_2: { name: 'Guardians of the Galaxy Vol. 2', id: 915 },
  SPIDER_MAN_HOMECOMING: { name: 'Spider-Man: Homecoming', id: 916 },
  THOR_RAGNAROK: { name: 'Thor: Ragnarok', id: 917 },
  BLACK_PANTHER: { name: 'Black Panther', id: 918 },
  AVENGERS_INFINITY_WAR: { name: 'Avengers: Infinity War', id: 919 },
  ANT_MAN_AND_THE_WASP: { name: 'Ant-Man and the Wasp', id: 920 },
  CAPTAIN_MARVEL: { name: 'Captain Marvel', id: 921 },
  AVENGERS_ENDGAME: { name: 'Avengers: Endgame', id: 922 },
  SPIDER_MAN_FAR_FROM_HOME: { name: 'Spider-Man: Far from Home', id: 923 },
};
const MOVIES = Object.values(movieMasterData).map((movieInfo) => movieInfo.name);

// Create a reverse-map for use across the project
let CHARACTER = { ...characterMasterData };
for (key in characterMasterData) {
  const characterInfo = characterMasterData[key];
  for (subkey in characterInfo) {
    let subkeyInfo = characterInfo;
    subkeyInfo.key = key;
    CHARACTER[characterInfo[subkey]] = subkeyInfo;
  }
}

let MOVIE = { ...movieMasterData };
for (key in movieMasterData) {
  const movieInfo = movieMasterData[key];
  for (subkey in movieInfo) {
    let subkeyInfo = movieInfo;
    subkeyInfo.key = key;
    MOVIE[movieInfo[subkey]] = subkeyInfo;
  }
}
