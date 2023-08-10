getName();
console.log(x);
console.log(getName);

var x = 7;

function getName() {
  console.log("Namaste Javascript");
}

let a = 100;
a = 200;

console.log(a);

function f() {
  var x = 10;
  b();
  function b() {
    console.log(x);
  }
}

f();
