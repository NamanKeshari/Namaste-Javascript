// Callback functions

setTimeout(() => {
  console.log("timer");
}, 5000);

function x(y) {
  console.log("x");
  y();
}

x(function y() {
  console.log("y");
});

function attachEventListeners() {
  let count = 0;
  document.getElementById("click_me").addEventListener("click", function xyz() {
    console.log("button clicked", ++count);
  });
}

attachEventListeners();
