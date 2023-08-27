document.getElementById("grandparent").addEventListener(
  "click",
  (e) => {
    console.log("Grandparent Clicked!");
    e.stopPropagation();
  },
  true
); // capturing

document.getElementById("parent").addEventListener(
  "click",
  () => {
    console.log("Parent Clicked!");
  },
  false
); // bubbling

document.getElementById("child").addEventListener(
  "click",
  (e) => {
    console.log("Child Clicked!");
    // e.stopPropagation();
  },
  true
); // capturing
