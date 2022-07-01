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
  if (sort === undefined || sort === false) {
    return species.reduce((acc, animal) => {
      acc[animal.location] = acc[animal.location] || [];
      const obj = createObj();
      obj[animal.name] = animal.residents.map((element) => element.name);
      acc[animal.location].push(obj);
      return acc;
    }, {});
  } return species.reduce((acc, animal) => {
    acc[animal.location] = acc[animal.location] || [];
    const obj = createObj();
    obj[animal.name] = animal.residents.map((element) => element.name).sort();
    acc[animal.location].push(obj);
    return acc;
  }, {});
}

function getAnimalSex(sex, sort) {
  if (sort === undefined || sort === false) {
    return species.reduce((acc, animal) => {
      acc[animal.location] = acc[animal.location] || [];
      const obj = createObj();
      obj[animal.name] = animal.residents
        .filter((element) => (element.sex === sex)).map((item) => item.name);
      acc[animal.location].push(obj);
      return acc;
    }, {});
  } return species.reduce((acc, animal) => {
    acc[animal.location] = acc[animal.location] || [];
    const obj = createObj();
    obj[animal.name] = animal.residents
      .filter((element) => (element.sex === sex)).map((item) => item.name).sort();
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
