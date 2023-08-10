const name1 = {
  firstName: "Akshay",
  lastName: "Saini",
};

const name2 = {
  firstName: "Sachin",
  lastName: "Tendulkar",
};

const printFullName = function (homeTown, state, country) {
  console.log(
    this.firstName +
      " " +
      this.lastName +
      " from " +
      homeTown +
      ", " +
      state +
      ", " +
      country
  );
};

printFullName.call(name1, "Dehradun", "Uttrakhand");
printFullName.apply(name2, ["Mumbai", "Maharashtra"]);

const print1 = printFullName.bind(name1, "Dehradun", "Uttrakhand");
const copyPrint = print1.bind("India");
copyPrint();

Function.prototype.myBind = function (...args) {
  const obj = this;
  const params = args.slice(1);

  return function (...args2) {
    obj.call(args[0], ...params, ...args2);
  };
};
const print2 = printFullName.myBind(name1, "Dehradun");
const print3 = print2.myBind("Uttrakhand");

print3("India");
