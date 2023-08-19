const dude = Object.create({});

dude.name = "Sinaaaa";
dude.age = 34;

const myBrothers = ["Ben", "Sam"];

myBrothers;

const human = {
  kind: "Human",
};

const sina = Object.create(human);
sina.age = 34;

const ben = Object.create(sina);
ben.age = 14;

ben.age;
/**
 * => o/p -> 14
 * if we look at ben object it has age right inside so we don't have to go inside its prototype chain to look for it.
 * So, if try to access a property of a variable, it looks in its object, if it's not present then it goes to its
 * inherited prototype and so on. If it finds we get the access, otherwise it returns undefined.
 * */

class Human {
  talk() {
    return "Talking";
  }
}

class SuperHuman extends Human {
  fly() {
    return "Flying";
  }
}

const ben2 = new SuperHuman();

/**
 * Difference between __proto__ and prototype
 *
 * __proto__ :-
 * - It is only present in objects or instances of a class
 * - __proto__ is property of every variable that is pointing to the parent object that it's inheriting from.
 *
 * prototype :-
 * - It is only in constructor functions or factory functions or classes.
 * - prototype is a property on the constructor function that contains all the stuff that will be inherited by its instance.
 *
 * Conclusion:
 * So, in essence, both of them are actually the same thing but accessed from different ends.
 */

// Factory Function
function person(name) {
  return {
    name,
  };
}

const me = person("naman");

// So both of them are same below:-
const dude1 = {};
const dude2 = new Object({});

// same o/p for both below
// a and b are both same, no inheritance happening here
const a = new Object(dude1);
const b = { ...dude };

// Constructor Function
function Dude() {
  this.talk = function () {
    return "Talking";
  };
}

const you = new Dude();

Dude.prototype === you.__proto__; // o/p -> true
