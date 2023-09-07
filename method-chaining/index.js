class Calculator {
  constructor() {
    this.total = 0;
  }
  add(n) {
    this.total += n;
    return this;
  }
  multiply(n) {
    this.total *= n;
    return this;
  }
  substract(n) {
    this.total -= n;
    return this;
  }
  printTotal() {
    console.log(this.total);
    return this;
  }
}

const result = new Calculator();
result.add(10).multiply(5).substract(10);
result.printTotal();
