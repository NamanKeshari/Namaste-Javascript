function a() {
  var x = 0,
    y = 89;
  return function b() {
    console.log(x);
  };
}

var c = a();

c();
