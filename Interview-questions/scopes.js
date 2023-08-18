/**
 * Hoisting in depth
 * - lexical scope
 *
 * var, let, const scopes in depth:-
 * - global scope
 * - block scoped
 */

let a = 7;

function fun() {
  var b = 8;
  console.log(a, b);

  return () => {
    var c = 9;
    // console.log(a, this.b, c); => remove b from lexical scope because of smart garbage collector since we are not using it.
    console.log(a, b, c); // here b will remain in lexical scope since we're using it.
    console.log(this); // this will represent window only because above function fun will be executed by window only.
  };
}

const newFun = fun();
newFun();

if (a == 7) {
  let b = 8;
  console.log("inside block b:", b);
}

function naman() {
  const j = 0;

  console.log(j);
}
naman();
console.log(j);
