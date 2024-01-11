// Q2) Given an array of strings strs, group the anagrams together. You can return the answer in
// any order.
// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase,
// typically using all the original letters exactly once.
// Example 1:
// Input: strs = ["eat","tea","tan","ate","nat","bat"]
// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
// Example 2:
// Input: strs = [""]
// Output: [[""]]
// Example 3:

// Input: strs = ["a"]
// Output: [["a"]]

function anagram(arr) {
  let map = {};
  for (const str of arr) {
    let key = str.split("").sort().join("");
    if (map[key]) {
      map[key].push(str);
    } else {
      map[key] = [str];
    }
  }
  return Object.values(map);
}

// let strs = ["eat", "tea", "tan", "ate", "nat", "bat"];
// let strs = [""];
let strs = ["a"];
let result = anagram(strs);
console.log(result);
