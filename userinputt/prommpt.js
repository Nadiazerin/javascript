const prompt = require("prompt-sync")();
let a,
  b,
  sum = 0;
a = parseInt(prompt("Enter 1st number"));
b = parseInt(prompt("Enter second number"));
sum = a + b;
console.log(sum);
//most important!
let gameNum = 25;
let userNum = parseInt(prompt("Enter the number"));
while (gameNum != userNum) {
  userNum = parseInt(prompt("You entired wrong guess! pls try again"));
}
console.log("congratulations !!");
//for loop
let n;
n = parseInt(prompt("Enter a number"));
let sum = 0;
for (let i = 1; i <= n; i++) {
  console.log("sum is=", (sum = sum + i));
}
//while loop
let m;
let sum = 0;
m = parseInt(prompt("Enter a number "));
let j = 1;
while (j <= m) {
  console.log("sum is ", (sum = sum + j));
  j++;
}
//do-while loop
let r;
r = parseInt(prompt("Enter a number "));
let sum = 0;
let k = 1;
do {
  console.log("sum is=", (sum = sum + k));
  k++;
} while (k <= r);
