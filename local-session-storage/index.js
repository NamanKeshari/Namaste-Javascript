localStorage.setItem("hello", "world");

localStorage.setItem("hello", "world 1");

localStorage.setItem("hello1", "world");

console.log(localStorage.getItem("hello"));

localStorage.removeItem("hello");

localStorage.clear();

const user = { name: "Naman Keshari" };

localStorage.setItem("user", JSON.stringify(user));

console.log(JSON.parse(localStorage.getItem("user")));

function get(key) {
  return JSON.parse(localStorage.getItem(key));
}

function set(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}
