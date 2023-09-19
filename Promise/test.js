const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(4);
  }, 2000);
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(2);
  }, 3000);
});

const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(5);
  }, 4000);
});

const p4 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("reject krda si, utte **** marda si");
  }, 3000);
});

async function test() {
  const input = [p1, p2, p3, p4];
  //   const res = await Promise.all(input);
  //   console.log(res);
  const res1 = await Promise.allSettled(input);
  console.log(res1);

  const res2 = await Promise.race(input);
  console.log(res2);
}
test();
