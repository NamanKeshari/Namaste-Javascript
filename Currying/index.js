const multiply = (x, y) => {
  console.log(x * y);
};

const multiplyByTWo = multiply.bind(this, 2);

multiplyByTWo(3);

const multiplyClosure = function (x) {
  return function (y) {
    console.log(x * y);
  };
};

const multiplyByTWoClosure = multiplyClosure(2);
multiplyByTWoClosure(3);
