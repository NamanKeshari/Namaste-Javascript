Function.prototype.myBind = function (...args) {
  const fun = this;
  const obj = { ...args[0] };
  const args1 = args.slice(1);

  obj._this = fun;

  return function (...args2) {
    const val = obj._this(...args1, ...args2);
    return val;
  };
};

function printName(a, b, c) {
  return this.firstName + " " + this.lastName + " " + a + " " + b + " " + c;
}

const user = {
  firstName: "Naman",
  lastName: "Keshari",
};

const fun = printName.myBind(user);
const fun1 = fun.myBind(this, "rav", "ravinder");
const fun2 = fun1.myBind(this, "naman");
console.log(fun2());
