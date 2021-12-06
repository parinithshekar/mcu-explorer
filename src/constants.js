// CHARACTERS
class Character {
  static IRON_MAN = new Character('Iron Man', 1);
  static CAPTAIN_AMERICA = new Character('Captain America', 2);
  static THOR = new Character('Thor', 3);
  static THANOS = new Character('Thanos', 4);

  constuctor(name, id) {
    this.name = name;
    this.id = id;
  }
}

class Movie {
  static IRON_MAN = new Movie('Iron Man', 901);
  static CAPTAIN_AMERICA_FIRST_AVENGER = new Movie('Captain America : The First Avenger', 902);
  static THOR = new Movie('Thor', 903);
  static AVENGERS = new Movie('The Avengers', 904);

  constructor(title, id) {
    this.title = title;
    this.id = id;
  }
}
