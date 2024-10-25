let marks = [20, 30, 40, 50, 60, 70, 80, 90];
let sum = 0;
let avg = 0;
for (let idx = 0; idx < marks.length; idx++) {
  sum += marks[idx];
  avg = sum / marks.length;
}
console.log(avg);
