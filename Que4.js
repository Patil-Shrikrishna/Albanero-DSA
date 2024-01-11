// Q4) Given an array of non-negative integers nums, arrange them such that they form the largest
// number and return it.
// Note return the result in the form of string
// Example 1:
// Input: nums = [10,2]
// Output: "210"
// Example 2:
// Input: nums = [3,30,34,5,9]
// Output: "9534330"

function largestNumber(nums) {
  let num1 = 0;
  let num2 = 0;
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      num1 = Number(`${nums[i]}${nums[j]}`);
      num2 = Number(`${nums[j]}${nums[i]}`);
      if (num2 > num1) {
        let temp = nums[i];
        nums[i] = nums[j];
        nums[j] = temp;
      }
    }
  }
  return nums;
}

// let nums = [3, 30, 34, 5, 9];
let nums = [10, 2];
let result = largestNumber(nums);
console.log(result);
