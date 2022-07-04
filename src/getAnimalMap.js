const data = require('../data/zoo_data');

const { species } = data;

function getLocation() {
  return species.reduce((acc, animal) => {
    acc[animal.location] = acc[animal.location] || [];
    acc[animal.location].push(animal.name);
    return acc;
  }, {});
}

function createObj() {
  return {};
}

function getAnimalName(sort) {
  return species.reduce((acc, animal) => {
    acc[animal.location] = acc[animal.location] || [];
    const obj = createObj();
    obj[animal.name] = (sort === undefined || sort === false)
      ? animal.residents.map((element) => element.name)
      : animal.residents.map((element) => element.name).sort();
    acc[animal.location].push(obj);
    return acc;
  }, {});
}

function getAnimalSex(sex, sort) {
  return species.reduce((acc, animal) => {
    acc[animal.location] = acc[animal.location] || [];
    const obj = createObj();
    obj[animal.name] = (sort === undefined || sort === false)
      ? animal.residents.filter((element) => (element.sex === sex)).map((item) => item.name)
      : animal.residents.filter((element) => (element.sex === sex)).map((item) => item.name).sort();
    acc[animal.location].push(obj);
    return acc;
  }, {});
}

function getAnimalMap(options) {
  if (options === undefined) {
    return getLocation();
  }
  const { includeNames, sorted, sex } = options;
  if (includeNames === true && sex !== undefined) {
    return getAnimalSex(sex, sorted);
  } if (includeNames === true) {
    return getAnimalName(sorted);
  } return getLocation();
}

module.exports = getAnimalMap;
