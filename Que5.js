// Q5) Given a array of non-negative integers nums, Find the Kth largest element in the array
// Note - Do not use any sorting algorithm or library's sort method
// Example-1:
// Input: nums = [10,4,12,9,87,34], K = 2
// Output: 34

function kthLargest(arr, k) {
  let count = 0;
  while (count < k) {
    let max = 0;
    let index = 0;

    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > max) {
        max = arr[i];
        index = i;
      }
    }
    if (count === k - 1) {
      return max;
    } else {
      arr.splice(index, 1);
      count++;
    }
  }
}
let nums = [10, 4, 12, 9, 87, 34];
let K = 2;
let result = kthLargest(nums, K);
console.log(result);
