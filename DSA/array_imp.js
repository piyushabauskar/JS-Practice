// remove duplicates
let array = [5, 2, 9, 2, 8, 5, 3, 4, 4, 9];
let array1 = [3, 4, 9, 1, 8, 0, 43];
let uniqueArray = [...new Set(array)];
console.log(uniqueArray); // [1, 2, 3, 4]
// using filter
let res = array.filter((item, index) => array.indexOf(item) === index);
console.log(res);

// first unique element
function uniqueElement() {
  let map = new Map();
  for (let num of array) {
    map.set(num, (map.get(num) || 0) + 1);
  }
  for (let num of array) {
    if (map.get(num) === 1) {
      return num;
    }
  }
}

console.log(uniqueElement());

// first common element in two array\
function firstComElement() {
  let set = new Set(array);
  for (let num of array1) {
    if (set.has(num)) {
      return num;
    }
  }
}
console.log(firstComElement());

// find common elements in two arrays

function commonElements() {
  let set1 = new Set(array);
  let set2 = new Set(array1);
  return [...set1].filter((num) => set2.has(num));
}

console.log(commonElements());

//group anagrams

function groupAnagrams() {
  let array1 = [];
}
