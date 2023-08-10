function x() {
  for (var i = 1; i <= 5; i++) {
    function f(x) {
      setTimeout(() => {
        console.log(x);
      }, x * 1000);
    }
    f(i);
  }

  console.log("Namaste Javascript");
}

x();

// let works because it has block scope and it creates a new copy of i every time in that block, function encloses that new value with it.
