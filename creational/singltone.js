// * гарантия того, что все будущие объекты будут иметь ссылку на единственный экземпляр данного класса

// - 1
{
  const Singl_tone = {
    foo: 123,
    getInstance() {
      return this;
    }
  };

  let obj_1 = Singl_tone.getInstance();
  let obj_2 = Singl_tone.getInstance();

  console.log(obj_1 === obj_2);
}

// - 2
{
  function Star() {
    if (!Star.instance) {
      Star.instance = this;
      this.color = 'yellow';
      this.sparcle = function() {
        console.log('Sparcle!');
      };
    }

    return Star.instance;
  }

  // = realization
  var star1 = new Star(); // creating 1st Object
  var star2 = new Star(); // creating 2st Object

  console.log(star1 === star2); // true
}

// - 3
{
  function Sun() {
    if (typeof Sun.instance === 'object') {
      return Sun.instance;
    }

    this.color = 'green';
    this.isBig = true;

    Sun.instance = this;
  }

  // = realization
  var sun1 = new Sun(); // creating 1st Object
  var sun2 = new Sun(); // creating 2st Object

  console.log(sun1 === sun2); // true
}

// - 4
{
  function Singltone() {
    if (Singltone.instance) return Singltone.instance;

    this.foo = 123;
    return (Singltone.instance = this);
  }

  let obj1 = Singltone();
  let obj2 = Singltone();

  console.log(obj1 === obj2);
}
