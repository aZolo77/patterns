import http from './http.js';
import HttpAdapter from './http-adapter.js';
import Repository from './repository.js';

const httpAdapter = new HttpAdapter(http);
const courseRepo = new Repository(
  'https://codedojo.ru',
  'courses',
  httpAdapter
);

courseRepo.getAll().then(courses => console.log(courses));
