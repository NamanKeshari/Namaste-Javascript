// class Counter {
//   constructor() {
//     this.count = 0;
//   }

//   incrementCounter() {
//     this.count++;
//     console.log(this.count);
//   }

//   decrementCounter() {
//     this.count--;
//     console.log(this.count);
//   }
// }

// var counter = new Counter();

// counter.incrementCounter();
// counter.incrementCounter();

// counter.decrementCounter();

function Counter() {
  var count = 0;

  this.incrementCounter = () => {
    count++;
  };

  this.decrementCounter = () => {
    count--;
  };

  this.getCount = () => {
    return count;
  };

  this.printCount = () => {
    console.log(count);
  };
}

const counter = new Counter();

counter.incrementCounter();
counter.incrementCounter();
counter.printCount();
counter.decrementCounter();
counter.printCount();
