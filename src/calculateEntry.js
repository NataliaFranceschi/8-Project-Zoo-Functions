const data = require('../data/zoo_data');

const { prices } = data;

function countEntrants(entrants = 0) {
  if (Object.entries(entrants).length === 0) {
    return 0;
  }
  const child = [];
  const adult = [];
  const senior = [];
  entrants.forEach((element) => {
    if (element.age < 18) {
      child.push(element);
    } else if (element.age >= 50) {
      senior.push(element);
    } else {
      adult.push(element);
    }
  });
  return { adult: adult.length, child: child.length, senior: senior.length };
}

function calculateEntry(entrants = 0) {
  if (Object.entries(entrants).length === 0) {
    return 0;
  }
  const count = countEntrants(entrants);
  const { adult, child, senior } = count;
  const total = adult * prices.adult + child * prices.child + senior * prices.senior;
  return total;
}

module.exports = { calculateEntry, countEntrants };
