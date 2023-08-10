const name1 = {
  firstName: "Akshay",
  lastName: "Saini",
};

const name2 = {
  firstName: "Sachin",
  lastName: "Tendulkar",
};

const printFullName = function (homeTown, state) {
  console.log(
    this.firstName + " " + this.lastName + " from " + homeTown + ", " + state
  );
};

printFullName.call(name1, "Dehradun", "Uttrakhand");
printFullName.apply(name2, ["Mumbai", "Maharashtra"]);

const print = printFullName.bind(name1, "Dehradun", "Uttrakhand");
print();
