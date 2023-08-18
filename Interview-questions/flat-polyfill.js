Array.prototype.myFlat = function (n = 1) {
  const arr = this;

  const result = [];
  function recur(arr, i, n) {
    if (i == arr.length) return;

    if (!Array.isArray(arr[i]) || n == 0) {
      result.push(arr[i]);
      recur(arr, i + 1, n);
    } else {
      recur(arr[i], 0, n - 1);
    }
  }

  recur(arr, 0, n);
  return result;
};

const arr = [1, 2, 3, [4, [5]]];

const result = arr.flat(2);
const myResult = arr.myFlat(2);
console.log({ result, myResult });
