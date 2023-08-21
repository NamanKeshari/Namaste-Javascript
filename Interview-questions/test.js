function debounce(cb, timeout = 300) {
  let timer;

  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      cb.apply(this, args);
    }, timeout);
  };
}

function throttle(cb, timeout = 300) {
  let shouldWait = false;

  return (...args) => {
    if (shouldWait) return;
    cb.apply(this, args);
    shouldWait = true;
    setTimeout(() => {
      shouldWait = false;
    }, timeout);
  };
}

document.getElementById("debounce-btn").onclick = debounce(() => {
  console.log("hi naman debounce");
}, 3000);

document.getElementById("throttle-btn").onclick = throttle(
  () => console.log("hi naman throttle"),
  3000
);

/**-------------------------------------------------------------------------------------------------- */
/**
 * Write a prototype to find the second max value in an array
 */

const arr = [5, 2, 10, 23, 102, 56];

Array.prototype.secondMax = function () {
  const arr = [...this];
  arr.sort((a, b) => b - a);
  return arr[1];
};

console.log(arr.secondMax(), arr);
