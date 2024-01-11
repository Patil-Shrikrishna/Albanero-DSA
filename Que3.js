// Q3) Given a string s and a array of strings wordArray, return true if s can be segmented into a
// space-separated sequence of one or more array words.
// Note that the same word in the array may be reused multiple times in the segmentation.
// Example 1:
// Input: s = "leetcode", wordArray = ["leet","code"]
// Output: true
// Explanation: Return true because "leetcode" can be segmented as "leet code".
// Example 2:
// Input: s = "applepenapple", wordArray = ["apple","pen"]
// Output: true
// Explanation: Return true because "applepenapple" can be segmented as "apple pen apple".
// Note that you are allowed to reuse a dictionary word.
// Example 3:
// Input: s = "catsandog", wordArray = ["cats","dog","sand","and","cat"]
// Output: false

function isSegment(s, wordArray) {
  const strArray = new Array(s.length + 1).fill(false);
  strArray[0] = true;
  for (let i = 0; i < strArray.length; i++) {
    if (strArray[i] === false) continue;
    for (let j = i + 1; j < strArray.length; j++) {
      if (wordArray.includes(s.slice(i, j))) strArray[j] = true;
    }
  }
  return strArray[strArray.length - 1];
}

// let s = "leetcode";
// let wordArray = ["leet", "code"];
// let s = "applepenapple";
// let wordArray = ["apple", "pen"];
let s = "catsandog";
let wordArray = ["cats", "an", "dog", "cat"];
// let wordArray = ["cats", "dog", "sand", "and", "cat"];

let result = isSegment(s, wordArray);
console.log(result);
