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

const me = new Person("naman");
const you = new SuperHuman("Parul");
