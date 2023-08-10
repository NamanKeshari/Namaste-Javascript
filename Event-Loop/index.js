console.log("start");

setTimeout(function cbT() {
  console.log("CB settimeout");
}, 5000);

fetch("https://alexwohlbruck.github.io/cat-facts/").then(function cbF() {
  console.log("CB Netflix");
});

console.log("end");
