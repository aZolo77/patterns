class Employee {
  constructor(name, position, priority) {
    this.name = name;
    this.position = position;
    this.priority = priority;
    this.next = null;
  }

  handleRequest(request) {
    if (request.priority === this.priority) {
      console.log(`Request is handled by ${this.name} the ${this.position}`);
    } else {
      if (this.next) {
        this.next.handleRequest(request);
      } else {
        console.log('Некому обработать запрос');
      }
    }
  }
}

module.exports = Employee;
