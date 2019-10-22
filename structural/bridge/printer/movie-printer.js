// Мост (Bridge) - соединяет абстракцию (данные) и реализацию (методы). Разделяет класс на 2

// ==========================================================================================================
class MoviePrinter {
  constructor(movie) {
    this.movie = movie;
  }

  get header() {
    return this.movie.title;
  }

  get details() {
    return [
      ['Год', this.movie.year],
      ['Продолжительность', this.movie.runtime],
      ['Жарн', this.movie.genre]
    ];
  }

  print(formatter) {
    return formatter.format(this.header, this.details);
  }
}

module.exports = MoviePrinter;
