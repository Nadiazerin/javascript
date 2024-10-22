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
