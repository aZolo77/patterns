// Цепочка обязанностей позволяет передавать запросы последовательно по цепочке обработчиков. Каждый последующий обработчик решает, может ли он обработать запрос сам и стоит ли передавать запрос дальше по цепи

// =============================================================================================================
const Employee = require('./employee');

const request = {
  priority: 'high'
};

const operator = new Employee('Alan', 'Operator', 'low');
const technician = new Employee('Bob', 'Technician', 'medium');
const specialist = new Employee('Charlie', 'Specialist', 'high');

// передаём запросы по цепочке обработчиков
operator.next = technician;
technician.next = specialist;

operator.handleRequest(request);
