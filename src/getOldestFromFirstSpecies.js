const data = require('../data/zoo_data');

const { species, employees } = data;
function getOldestFromFirstSpecies(id) {
  const getAnimalId = employees.find((element) => element.id === id).responsibleFor[0];
  const getAnimal = species.filter((animal) => animal.id === getAnimalId);
  const getOldest = getAnimal[0].residents.reduce((acc, resident) => {
    if (acc.age > resident.age) {
      return acc;
    } return resident;
  });
  const { age, name, sex } = getOldest;
  return [name, sex, age];
}

module.exports = getOldestFromFirstSpecies;
