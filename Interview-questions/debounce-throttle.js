function debounce(cb, timeout = 300) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      cb.apply(this, args);
    }, timeout);
  };
}

document.getElementById("debounce-btn").onclick = debounce(() => {
  console.log("hi naman debounce");
}, 3000);

function throttle(cb, delay = 300) {
  let shouldWait = false;
  return function (...args) {
    if (shouldWait) return;
    cb.apply(this, args);
    shouldWait = true;
    setTimeout(() => {
      shouldWait = false;
    }, delay);
  };
}

document.getElementById("throttle-btn").onclick = throttle(
  () => console.log("hi naman throttle"),
  3000
);
