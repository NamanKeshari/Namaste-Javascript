function outest() {
  var c = 19;
  function outer(b) {
    function inner() {
      console.log(a, b, c);
    }
    var a = 10;

    return inner;
  }

  return outer;
}
let a = 100;
const outer = outest();
outer("hello world")();

const once = (cb) => {
  let flag = false;
  return () => {
    if (!flag) cb();
    flag = true;
  };
};

const funClosure = once(outer("how about you run it more than once?"));
funClosure();

function memoize(fn) {
  let calls = {};
  return function (...args) {
    let key = JSON.stringify(args);
    if (!calls.hasOwnProperty(key)) {
      return (calls[key] = fn.apply(this, args));
    }
    return calls[key];
  };
}

let count = 0;
function hello(name) {
  count++;
  return `hello ${name}`;
}

const output = memoize(hello);
console.log(output("naman"));
console.log(output("rishu"));
console.log(output("naman"));
console.log(count);
