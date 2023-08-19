class Person {
  a = 9;
  constructor(name) {
    this.name = name;
  }

  talk() {
    console.log("talking");
  }
}

class SuperHuman extends Person {
  constructor(props) {
    super(props);
  }

  flying() {
    console.log("flying");
  }
}

const me1 = new Person("naman");
const you1 = new SuperHuman("Parul");

// Actual Notes from video below

// Inheritance using Classes
class Person1 {
  talk() {
    return "Talking";
  }
}

const me2 = new Person1();
const you2 = new Person1();
me2.talk(); // Talking
you2.talk(); // Talking

// To update the function for both instances you only have to do it once:
Person1.prototype.talk = function () {
  return "New and improved Talking";
};

// -----------------------------------------
// Inheritance using a Constructor Function
function Person2() {}
Person2.prototype.talk = function () {
  return "Talking";
};

const me3 = new Person2();
const you3 = new Person2();
me3.talk(); // Talking
you3.talk(); // Talking

// -----------------------------------------
// Inheritance using pure objects with Object.create
const person2 = {
  talk() {
    return "Talking";
  },
};
const me4 = Object.create(person2);
me4.talk(); // Talking

// -----------------------------------------
// Inheritance using pure objects with Object.setPrototypeOf
const person1 = {};
person1.__proto__.talk = function () {
  return "Talking";
};
const me5 = {};
Object.setPrototypeOf(me5, person1);
me5.talk(); // Talking

// -----------------------------------------
// Extending a Class using 'extends'
class Person3 {
  talk() {
    return "talking";
  }
}

class SuperHuman2 extends Person3 {
  fly() {
    return "flying";
  }
}
const me = new Person3();
console.log(me.talk); // talk exists
console.log(me.fly); // fly does NOT exists

const you = new SuperHuman2();
console.log(you.fly); // fly exists
console.log(you.talk); // talk also exists!
