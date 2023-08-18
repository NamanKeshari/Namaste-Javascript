const test = {
  a: 456,
  b: 156,
};

function tester(a, b) {
  return `a: ${this.a}, b: ${this.b} => myParams -> a: ${a}, b: ${b}`;
}

Function.prototype.myBind = function (scope, ...args) {
  const fun = this;
  scope._this = fun;
  const argsRecieved = args;
  return function (...params) {
    const result = scope._this(...argsRecieved, ...params);
    return result;
  };
};

Function.prototype.myCall = function (scope, ...args) {
  const fun = this;
  scope._this = fun;

  const result = scope._this(...args);
  return result;
};

Function.prototype.myApply = function (scope, args) {
  const fun = this;
  scope._this = fun;
  const result = scope._this(...args);
  return result;
};

const bindExecuter = tester.myBind(test, 50);
console.log(bindExecuter(60));

const originalBindExecuter = tester.myCall(test, 50, 60);
console.log({ call: originalBindExecuter });

const applyRes = tester.myApply(test, [50, 60]);
console.log({ applyRes });
