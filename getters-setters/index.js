const Person = function (firstName, lastName) {
  return {
    firstName,
    lastName,
    get fullName() {
      return `${this.firstName} ${this.lastName}`;
    },
    set fullName(value) {
      const values = value.split(" ");
      this.firstName = values[0];
      this.lastName = values[1];
    },
    test() {
      const a = 10;
      function t() {
        console.log(a, this);
      }
      //   t();
      return t;
    },
  };
};

const person = Person("Naman", "Keshari");
const person2 = Person("Nipun", "Seth");
person.fullName = "Arsh Keshari";

console.log(person2.fullName);

console.log(person.test());
person.test()();
