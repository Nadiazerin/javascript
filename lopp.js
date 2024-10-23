// print numbers from 1 to 5
/*let i;
for (i = 1; i <= 5; i++) {
  console.log("i=", i);
}*/
//while loop
/*let count = 1;
while (count <= 5) {
  console.log("count=", count);
  count++;
}*/
//do while loop
/*let j = 1;
do {
  console.log("j=", j);
  j++;
} while (j <= 5);*/
// display sum of n natural  number
//for loop
/*const prompt = require("prompt-sync")();
let n;
n = parseInt(prompt("Enter a number"));
let sum = 0;
for (let i = 1; i <= n; i++) {
  console.log("sum is=", (sum += i));
}
// while loop diye
let m;
m = parseInt(prompt("Enter a number "));
let j = 1;
sun = 0;
while (j <= m) {
  console.log("sum is =", (sun += j));
  j++;
}*/
//do while loop diye

/*let p;
p = parseInt(prompt("Enter a number"));
let k = 0;
let som = 0;
do {
  console.log("som is=", (som += k));
  k++;
} while (k <= p);*/
// even number er sum
/*let n;
n = parseInt(prompt("Enter a number"));
let sum = 0;
for (let i = 1; i <= n; i++) {
  if (i % 2 == 0) console.log("sum is=", (sum += i));
}

// times table
/*const prompt = require("prompt-sync")();
let n;
n = parseInt(prompt("Enter a number"));
for (let i = 0; i <= 10; i++) {
  console.log(i * n);
}
// times table using while loop
const prompt = require("prompt-sync")();
let i = 1;
let n;
n = parseInt(prompt("Enter a number="));
while (i <= 10) {
  console.log(i * n);
  i++;
}*/

// for of loop
let a = "i love u";
size = 0;
for (let i of a) {
  console.log(i);
  size++;
}
console.log(size);
//for in loop
let student = {
  name: "zerin",
  age: 20,
  cgpa: 8,
  isPass: true,
};

for (let key in student) {
  console.log(key, student[key]);
}
