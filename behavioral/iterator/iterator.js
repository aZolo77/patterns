// обеспечить доступ к данным, не раскрыв при этом способ их хранения
var collection = (function() {
  var current = -1;
  var data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  var count = data.length;

  return {
    moveNext: function() {
      if (current == count - 1) {
        return false;
      } else {
        current++;
        return true;
      }
    },

    getCurrent: function() {
      return data[current];
    },

    reset: function() {
      current = -1;
    }
  };
})();

while (collection.moveNext()) {
  var temp = collection.getCurrent();
  console.log(temp);
}

// == ES6 {iterators}
let xmen = ['Cyclops', 'Wolverine', 'Rogue'];

let iterator = xmen[Symbol.iterator]();

let next = iterator.next();

while (!next.done) {
  console.log(next.value);
  next = iterator.next();
}
