const test = {
  a: 456,
  b: 156,
};

function tester(a, b) {
  return `a: ${this.a}, b: ${this.b} => myParams -> a: ${a}, b: ${b}`;
}

function test1() {
  return this;
}

Function.prototype.myBind = function (scope, ...args) {
  const fun = this;
  const argsRecieved = args;
  return function (...params) {
    const result = fun.myCall(scope, ...argsRecieved, ...params);
    return result;
  };
};

Function.prototype.myCall = function (scope, ...args) {
  const fun = this;
  const symbol = Symbol("Function");
  s = { ...scope };
  s[symbol] = fun;

  const result = s[symbol](...args);
  delete s[symbol];
  return result;
};

Function.prototype.myApply = function (scope, args) {
  const fun = this;
  const symbol = Symbol("Function");
  s = { ...scope };
  s[symbol] = fun;

  const result = s[symbol](...args);
  delete s[symbol];
  return result;
};

const bindExecuter = tester.myBind(test, 50);
console.log(bindExecuter(60));

const originalBindExecuter = tester.myCall(test, 50, 60);
console.log({ call: originalBindExecuter });
console.log(test1.myBind(test)());

const applyRes = tester.myApply(test, [50, 60]);
console.log({ applyRes });
