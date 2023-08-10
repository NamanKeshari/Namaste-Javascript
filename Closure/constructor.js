class Counter {
  constructor() {
    this.count = 0;
  }

  incrementCounter() {
    this.count++;
    console.log(this.count);
  }

  decrementCounter() {
    this.count--;
    console.log(this.count);
  }
}

var counter = new Counter();

counter.incrementCounter();
counter.incrementCounter();

counter.decrementCounter();
