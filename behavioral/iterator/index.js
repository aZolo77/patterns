const arr = [1, 2, 3, 4, 5];
const set = new Set(['a', 's', 'd', 'f', 'g']);
const str = 'STRING';

// = итератор может перебирать любую структуру данных
for (let item of arr) {
  console.log(item);
}

for (let item of set) {
  console.log(item);
}

for (let item of str) {
  console.log(item);
}
