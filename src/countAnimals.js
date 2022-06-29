const data = require('../data/zoo_data');

const { species } = data;

function countAnimals(animal) {
  const animals = species.reduce((acc, curr) => {
    acc[curr.name] = curr.residents.length;
    return acc;
  }, {});
  if (animal === undefined) {
    return animals;
  }
  const { specie, sex } = animal;
  const resultado = species.find((element) => element.name === specie);
  if (sex !== undefined) {
    return resultado.residents.filter((element) => element.sex === sex).length;
  } return resultado.residents.length;
}

module.exports = countAnimals;
