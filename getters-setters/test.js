function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;

  Object.defineProperty(this, "fullName", {
    get() {
      return `${this.firstName} ${this.lastName}`;
    },
    set(value) {
      const values = value.split(" ");
      this.firstName = values[0];
      this.lastName = values[1];
    },
  });
}

const p = new Person("rinka", "chaudhary");
console.log(p.fullName);
p.fullName = "naman keshari";
console.log(p.fullName);

const p2 = new Person("chinka", "dharma");
console.log(p2.fullName);
p2.fullName = "arsh keshari";
console.log(p2.fullName);
