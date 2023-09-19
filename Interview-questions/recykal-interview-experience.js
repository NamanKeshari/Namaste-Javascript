/* input -> ["cat", "dog", "mat"] */

function reverseArr(arr) {
  let i = 0,
    j = arr.length - 1;
  while (i < j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
    i++;
    j--;
  }
  return arr;
}

function main(arr) {
  let newArr = reverseArr(arr);
  for (let i = 0; i < newArr.length; i++) {
    newArr[i] = reverseArr(newArr[i].split("")).join("");
  }
  console.log(newArr);
}

let input = ["cat", "dog", "mat"];
main(input);

// 'blaballab'

// longest -> 'ballab'

function checkPalindrome(str) {
  let i = 0,
    j = str.length - 1;
  while (i < j) {
    if (str[i] !== str[j]) return false;
    i++;
    j--;
  }
  return true;
}

function longestPalindromicSubstring(str) {
  let max = "";
  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j < str.length; j++) {
      let sub = str.substring(i, j + 1);
      if (checkPalindrome(sub)) {
        if (sub.length > max.length) {
          max = sub;
        }
      }
    }
  }
  return max;
}

console.log(longestPalindromicSubstring("blaballab"));
console.log("end");
