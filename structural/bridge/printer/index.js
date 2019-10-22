// == Client code

// = abstraction
const Movie = require('./movie');
// = bridge itself
const MoviePrinter = require('./movie-printer');
// = realization
const BasicFormatter = require('./basic-formatter');
const HtmlFormatter = require('./html-formatter');

//  {abstraction}
const movie = new Movie('Deadpool 2', 2018, 95, 'Action');

//  {bridge itself}
const printer = new MoviePrinter(movie);

//  {realization}
const basicFormatter = new BasicFormatter();
const htmlFormatter = new HtmlFormatter();

const result_1 = printer.print(basicFormatter);
const result_2 = printer.print(htmlFormatter);

console.log(result_1);
console.log(result_2);
