const characterMasterData = {
  IRON_MAN: { name: 'Iron Man', nickname: 'I.Man', id: 1 },
  CAPTAIN_AMERICA: { name: 'Captain America', nickname: 'C.America', id: 2 },
  THOR: { name: 'Thor', nickname: 'Thor', id: 3 },
  THANOS: { name: 'Thanos', nickname: 'Thanos', id: 4 },
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

// const MOVIE_ID = {
//   901: 'Iron Man',
//   902: 'The Incredible Hulk',
//   903: 'Iron Man 2',
//   904: 'Thor',
//   905: 'Captain America: The First Avenger',
//   906: 'The Avengers',
//   907: 'Iron Man 3',
//   908: 'Thor: The Dark World',
//   909: 'Captain America: The Winter Soldier',
//   910: 'Guardians of the Galaxy',
//   911: 'Avengers: Age of Ultron',
//   912: 'Ant-Man',
//   913: 'Captain America: Civil War',
//   914: 'Doctor Strange',
//   915: 'Guardians of the Galaxy Vol. 2',
//   916: 'Spider-Man: Homecoming',
//   917: 'Thor: Ragnarok',
//   918: 'Black Panther',
//   919: 'Avengers: Infinity War',
//   920: 'Ant-Man and the Wasp',
//   921: 'Captain Marvel',
//   922: 'Avengers: Endgame',
//   923: 'Spider-Man: Far from Home',
// };

// const MOVIES = Object.values(MOVIE_ID);

// // CHARACTERS
// // class Character {
// //   static IRON_MAN = new Character('Iron Man', 1);
// //   static CAPTAIN_AMERICA = new Character('Captain America', 2);
// //   static THOR = new Character('Thor', 3);
// //   static THANOS = new Character('Thanos', 4);

// //   constuctor(name, id) {
// //     this.name = name;
// //     this.id = id;
// //   }
// // }

// // class Movie {
// //   static IRON_MAN = new Movie('Iron Man', 901);
// //   static THE_INCREDIBLE_HULK = new Movie('The Incredible Hulk', 902);
// //   static IRON_MAN_2 = new Movie('Iron Man 2', 903);
// //   static THOR = new Movie('Thor', 904);
// //   static CAPTAIN_AMERICA_FIRST_AVENGER = new Movie('Captain America: The First Avenger', 905);
// //   static AVENGERS = new Movie('The Avengers', 906);
// //   static IRON_MAN_3 = new Movie('Iron Man 3', 907);
// //   static THOR_DARK_WORLD = new Movie('Thor: The Dark World', 908);
// //   static CAPTAIN_AMERICA_WINTER_SOLDIER = new Movie('Captain America: The Winter Soldier', 909);
// //   static GUARDIANS_OF_THE_GALAXY = new Movie('Guardians of the Galaxy', 910);
// //   static AVENGERS_AGE_OF_ULTRON = new Movie('Avengers: Age of Ultron', 911);
// //   static ANT_MAN = new Movie('Ant-Man', 912);
// //   static CAPTAIN_AMERICA_CIVIL_WAR = new Movie('Captain America: Civil War', 913);
// //   static DOCTOR_STRANGE = new Movie('Doctor Strange', 914);
// //   static GUARDIANS_OF_THE_GALAXY_2 = new Movie('Guardians of the Galaxy Vol. 2', 915);
// //   static SPIDER_MAN_HOMECOMING = new Movie('Spider-Man: Homecoming', 916);
// //   static THOR_RAGNAROK = new Movie('Thor: Ragnarok', 917);
// //   static BLACK_PANTHER = new Movie('Black Panther', 918);
// //   static AVENGERS_INFINITY_WAR = new Movie('Avengers: Infinity War', 919);
// //   static ANT_MAN_AND_THE_WASP = new Movie('Ant-Man and the Wasp', 920);
// //   static CAPTAIN_MARVEL = new Movie('Captain Marvel', 921);
// //   static AVENGERS_ENDGAME = new Movie('Avengers: Endgame', 922);
// //   static SPIDER_MAN_FAR_FROM_HOME = new Movie('Spider-Man: Far from Home', 923);

// //   constructor(title, id) {
// //     this.title = title;
// //     this.id = id;
// //   }
// // }
