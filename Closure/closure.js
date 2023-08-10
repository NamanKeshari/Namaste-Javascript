function outest() {
  var c = 19;
  function outer(b) {
    function inner() {
      console.log(a, b, c);
    }
    // var a = 10;

    return inner;
  }

  return outer;
}
let a = 100;
const outer = outest();
outer("hello world")();
