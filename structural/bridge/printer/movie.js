class Movie {
  // абстракция (данные)
  constructor(title, year, runtime, genre) {
    this.title = title;
    this.year = year;
    this.runtime = runtime;
    this.genre = genre;
  }
}

module.exports = Movie;
