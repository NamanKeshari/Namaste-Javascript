const radius = [5, 6, 8, 2];

const area = (radius) => {
  return Math.PI * radius * radius;
};

const circumference = (radius) => {
  return Math.PI * 2 * radius;
};

const diameter = (radius) => {
  return 2 * radius;
};

const calculate = (radius, logic) => {
  let output = [];

  for (let i = 0; i < radius.length; i++) {
    output.push(logic(radius[i]));
  }

  return output;
};

Array.prototype.calculate = function (logic) {
  let output = [];

  for (let i = 0; i < this.length; i++) {
    output.push(logic(this[i]));
  }

  return output;
};

console.log(calculate(radius, area));
console.log(radius.map(area));
console.log(radius.calculate(area));
console.log(calculate(radius, circumference));
console.log(calculate(radius, diameter));
