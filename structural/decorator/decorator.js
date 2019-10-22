// Обёртка [Decorator] {ExoSkelet}
function A() {
  this.get = function() {
    console.log('I am class A');
  };
}

// = Constructor for decorators
function Decorator(obj) {
  this._obj = obj;
}
Decorator.prototype = Object.create(A.prototype);
Decorator.prototype.constructor = Decorator;

// = Decorator 1
function Decorator_B(obj) {
  Decorator.call(this, obj);
  this.get = function() {
    this._obj.get();
    console.log('* Прокачанный XZIBITOM!');
  };
}
Decorator_B.prototype = Object.create(Decorator.prototype);
Decorator_B.prototype.constructor = Decorator_B;

// = Decorator 2
function Decorator_C(obj) {
  Decorator.call(this, obj);
  this.get = function() {
    this._obj.get();
    console.log('# Монитор мне в монитор!');
  };
}

Decorator_C.prototype = Object.create(Decorator.prototype);
Decorator_C.prototype.constructor = Decorator_C;

// creating objects
var obj_1 = new A();
var obj_2 = new Decorator_B(new A());
var obj_3 = new Decorator_C(new A());
var obj_4 = new Decorator_C(new Decorator_B(new A()));

// initializing methods on different objects
obj_1.get();
console.log('------------');
obj_2.get();
console.log('------------');
obj_3.get();
console.log('------------');
obj_4.get();
