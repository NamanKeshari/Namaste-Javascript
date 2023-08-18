Array.prototype.myReduce = function (logic, initialValue) {
  const arr = this;
  let prev = initialValue;
  for (let i = 0; i < arr.length; i++) {
    prev = logic(prev, arr[i], i, arr);
  }

  return prev;
};

Array.prototype.myMap = function (logic) {
  const arr = this;
  let ans = [];
  for (let i = 0; i < arr.length; i++) {
    ans.push(logic(arr[i], i));
  }
  return ans;
};

Array.prototype.myFilter = function (logic) {
  const arr = this;
  let ans = [];

  for (let i = 0; i < arr.length; i++) {
    if (logic(arr[i], i)) ans.push(arr[i]);
  }

  return ans;
};

let arr = [1, 2, 3, 56, 8, 9];

const logic = (acc, curr, i, arr) => {
  return acc + curr;
};

const customLogic = (radius, i) => {
  return radius * i;
};

const filterLogic = (radius, i) => {
  return radius % 2 === 0;
};

const sum = arr.reduce(logic, 0);
const mySum = arr.myReduce(logic, 0);

const arrMap = arr.map(customLogic);
const myArrMap = arr.myMap(customLogic);

const arrFilter = arr.filter(filterLogic);
const myArrFilter = arr.myFilter(filterLogic);

console.log({ sum, mySum });
console.log({ arrMap, myArrMap });
console.log({ arrFilter, myArrFilter });
