const data = require('../data/zoo_data');

const { employees, species } = data;

function getAnimal(arr) {
  return arr.map((element) => species
    .find((animal) => animal.id === element).name);
}

function getLocation(arr) {
  return getAnimal(arr).map((element) => species
    .find((animal) => animal.name === element).location);
}

function allEmployees() {
  return employees.map((employee) => ({ id: employee.id,
    fullName: `${employee.firstName} ${employee.lastName}`,
    species: getAnimal(employee.responsibleFor),
    locations: getLocation(employee.responsibleFor) }));
}

function getEmployeesCoverage(obj) {
  if (obj === undefined) {
    return allEmployees();
  }
  const param = Object.values(obj).join('');
  const getEmployee = employees.find((employee) => (
    employee.id === param || employee.firstName === param || employee.lastName === param));
  if (getEmployee === undefined) {
    throw new Error('Informações inválidas');
  }
  const { id, firstName, lastName, responsibleFor } = getEmployee;
  return { id,
    fullName: `${firstName} ${lastName}`,
    species: getAnimal(responsibleFor),
    locations: getLocation(responsibleFor) };
}

module.exports = getEmployeesCoverage;
