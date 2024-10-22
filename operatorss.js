/* operation in js
let a = 10;
let b = 5;

console.log("a+b=", a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
let c = a % b;
console.log(c);
// exponentiantion operators
console.log((a + b) ** 2);
// unary operators
let a = 10;
a--;
console.log(a);
// assignment operators
let a = 2;
a /= 2;
console.log(a);
// comparison operators
let a = 10;
let b = 7;
console.log("a>=b", a >= b);
// logical operators
let num1 = 20;
let num2 = 20;
console.log(!(num1 > num2));
// conditional statement t
let mode = "dark";
let color;
if (mode === "light") {
  color = "red ";
} else {
  color = "white";
}
console.log(color);
let a = 11;
if (a % 2 == 0) {
  console.log(a, "is even ");
} else {
  console.log(a, "is odd");
}

let age = 20;
if (age < 25) {
  console.log("junior");
} else if (age > 25) {
  console.log("senior ");
} else {
  console.log("middle ");
}
// ternary operators
let age = 25;
let result = age > 25 ? "adult" : "Not adult";
console.log(result);*/

/*let gameNum = 25;
let userNum = Number(prompt("Guess the number"));
while (gameNum != userNum) {
  userName = Number(prompt("wrong number! pls try again"));
}
console.log("congratulations");*/
let userInput = prompt("Please enter your name:");
console.log(userInput);
