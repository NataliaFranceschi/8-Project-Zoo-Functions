const data = require('../data/zoo_data');

const { species, hours } = data;

function getAnimal(element) {
  const animals = species.filter((animal) => animal.availability.includes(element));
  if (animals.length === 0) {
    return 'The zoo will be closed!';
  } return animals.map((animal) => animal.name);
}

function hour(element) {
  if (hours[element].open === 0) {
    return 'CLOSED';
  } return `Open from ${hours[element].open}am until ${hours[element].close}pm`;
}

function schedule(param) {
  const obj = {};
  if (param === undefined) {
    Object.keys(hours).forEach((element) => {
      obj[[element]] = { officeHour: hour(element), exhibition: getAnimal(element) };
    });
  } else {
    obj[[param]] = { officeHour: hour(param), exhibition: getAnimal(param) };
  }
  return obj;
}

function getSchedule(scheduleTarget) {
  const days = Object.keys(hours).find((day) => day === scheduleTarget);
  const animals = species.find((animal) => animal.name === scheduleTarget);
  if (scheduleTarget === undefined) {
    return schedule();
  } if (days !== undefined) {
    return schedule(scheduleTarget);
  } if (animals !== undefined) {
    return species.find((animal) => animal.name === scheduleTarget).availability;
  } return schedule();
}

module.exports = getSchedule;
