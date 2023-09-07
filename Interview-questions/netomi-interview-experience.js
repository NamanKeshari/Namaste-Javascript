// function func2() {
//   for (var i = 0; i < 3; i++) {
//     function a(i) {
//       setTimeout(() => console.log(i), 2000);
//     }
//     a(i);
//   }
// }
// func2();

// 'event loop'

// 3
// 3
// 3

// function func1() {
//   setTimeout(() => {
//     console.log(x);
//     console.log(y);
//   }, 3000);

//   var x = 2;
//   let y = 12;
// }
// func1();

// undefined
// undefined

// (function () {
//   setTimeout(() => console.log(1), 2000);
//   console.log(2);
//   setTimeout(() => console.log(3), 0);
//   console.log(Promise.resolve("we"));
//   console.log(4);
// })();

// debounce()();

// 2
// 4
// we
// 3
// 1

// microtask queue
// callback queue

// const calculator = {
//   total: 0,
//   add(val){
//     this.total += val;
//     return this;
//   },
//   multiply(val){
//     this.total *= val;
//     return this;
//   },
//   substract(val){
//     this.total -= val;
//     return this;
//   }
// }
// const result = calculator.add(10).multiply(5).substract(10)
// console.log(result.total)

// 0 10 50 40

// const obj = {
//   name: 'naman',
//   printName(){
//     return this.name;
//   },

// }

// const obj2 = {
//   name: 'mayank',
// }
// obj2.name = 'deod'

// console.log(obj.printName.call(obj2));

// console.log(obj.printName());

// let obj1 = {x: 1, y: { z: 2}}
// let obj2 = {...obj1}

// obj2.x = 10;
// obj2.y.z = 20

/** 
obj1 = {x: 1, y: { z: 2}}
obj2 = {x: 10, y: {z: 20}}
*/

// let isLoopRunning = true

// setTimeout(() => isLoopRunning = false, 2000)

// while(isLoopRunning) {
//   console.log('loop is running')
// }

// constructor function
// function Dude(name) {
//   (this.name = name),
//     (this.printName = function () {
//       return this.name;
//     });
// }

// Dude.prototype.reverse = function () {
//   const n = this.name;
//   const newN = n.split("").reverse().join("");
//   console.log(newN);
// };

// const me = new Dude("naman");
// const me1 = new Dude("mayank");
// const me2 = new Dude("qwqww");
// const me3 = new Dude("qwqwwwqwqq");
// me1.reverse();
// console.log(me1);
// console.log(me2);
// console.log(me3);

// factory function
// function dude(name) {
//   return {
//     name,
//     printName(){
//       return this.name;
//     }
//   };
// }

// const you = dude('mayank');
