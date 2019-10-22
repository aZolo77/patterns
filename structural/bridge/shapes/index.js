// Bridge uses composition over inheritance

// ========================================
// circle
function Circle(color) {
  this.color = color;

  this.toString = function() {
    // uses other class to set color
    return `${this.color.getColorName()} Circle`;
  };
}

// rectangle
function Rectangle(color) {
  this.color = color;

  this.toString = function() {
    // uses other class to set color
    return `${this.color.getColorName()} Rectangle`;
  };
}

// triangle
function Triangle(color) {
  this.color = color;

  this.toString = function() {
    // uses other class to set color
    return `${this.color.getColorName()} Triangle`;
  };
}

// red
function Red() {
  // implementation
  this.getColorName = function() {
    return 'Red';
  };
}

// blue
function Blue() {
  // implementation
  this.getColorName = function() {
    return 'Blue';
  };
}

// green
function Green() {
  // implementation
  this.getColorName = function() {
    return 'Green';
  };
}

const redColor = new Red();
const blueColor = new Blue();
const greenColor = new Green();

const redCircle = new Circle(redColor);
const blueCircle = new Circle(blueColor);
const greenRectangle = new Rectangle(greenColor);

console.log(redCircle.toString());
console.log(blueCircle.toString());
console.log(greenRectangle.toString());
