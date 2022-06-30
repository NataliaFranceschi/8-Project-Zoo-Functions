const data = require('../data/zoo_data');

const { employees } = data;

function isManager(id) {
  const getId = employees.map((element) => element.managers);
  return getId.some((element) => element.find((ids) => ids === id));
}

function getRelatedEmployees(managerId) {
  const relatedEmployees = employees.filter((id) => id.managers.includes(managerId));
  if (relatedEmployees.length === 0) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }
  return relatedEmployees.map((element) => `${element.firstName} ${element.lastName}`);
}

module.exports = { isManager, getRelatedEmployees };
