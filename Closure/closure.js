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

function memoize(cb, initialParams) {
  let val;

  let count = 0;
  let params1 = initialParams;
  return function test(params = params1) {
    if (params !== params1 || count === 0) {
      console.log("there's some change");
      val = cb(params);
      params1 = params;
    }
    count++;
    return val;
  };
}

function hello(name) {
  return `hello ${name}`;
}

const output = memoize(hello, "naman");
console.log(output());
console.log(output("naman"));
console.log(output("rishu"));
