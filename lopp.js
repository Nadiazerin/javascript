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
const prompt = require("prompt-sync")();
let n;
n = parseInt(prompt("Enter a number"));
let sum = 0;
for (let i = 1; i <= n; i++) {
  console.log("sum is=", (sum += i));
}
