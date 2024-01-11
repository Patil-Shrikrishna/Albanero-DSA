// Q1) Write a function that takes an integer 'x'(greater than 0) as input and returns a new integer
// formed by reversing the digits of 'x' without using any built-in methods for reversal. After
// reversing the digits, determine whether the resulting number has any prime factors. If it does
// have prime factors, return 'Yes' along with the list of prime factors; otherwise, return 'No'."
// Example 1:
// Input - 123
// reversed integer - 321
// prime factors of 321 are 3 and 107
// output - Yes - [3,107]
// Example 2:
// Input - 1500
// reversed Integre - 51
// prime factors of 51 are 3 and 17
// output - Yes - [3, 17]
// Example 3:
// Input - 1000
// reversed Integre - 1
// There are no prime factors for 1
// output - No

function reverseNum(num) {
  let rem = 0;
  let total = 0;
  while (num != 0) {
    rem = Math.floor(num % 10);
    total = total * 10 + rem;
    num = Math.floor(num / 10);
  }
  return total;
}
// let reverse = reverseNum(123);
// let reverse = reverseNum(1500);
let reverse = reverseNum(1000);
console.log("Reverse: ", reverse);

function checkPrime(num) {
  let primeFactor = [];
  for (let i = 2; i < num; i++) {
    if (Math.floor(num % i) === 0) {
      primeFactor.push(i);
    }
  }
  return primeFactor.length ? `YES - ${primeFactor}` : "NO";
}
let result = checkPrime(reverse);
console.log(result);
