const arr = [4, 56, 48];

console.log(arr.__proto__);

const object = {
  name: "Akshay",
  city: "Dehradun",
  getIntro: function () {
    console.log(this.name + " from " + this.city);
  },
};

let object2 = {
  name: "aditya",
};

// never do this
object2.__proto__ = object;

Function.prototype.myBind = function () {
  console.log("hi printed");
};

function fun() {}
