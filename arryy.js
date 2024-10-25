/*let marks = [20, 30, 40, 50, 60, 70, 80, 90];
let sum = 0;
let avg = 0;
for (let idx = 0; idx < marks.length; idx++) {
  sum += marks[idx];
  avg = sum / marks.length;
}
console.log(avg);

let marks = [20, 30, 40, 50, 60, 70, 80, 90];
let sum = 0;
let avg = 0;
for (let val of marks) {
  sum += val;
  avg = sum / marks.length;
}
console.log(`the average is=${avg}`);*/

let items = [250, 645, 300, 900, 50];
for (let i = 0; i < items.length; i++) {
  let offer = items[i] / 10;
  items[i] = items[i] - offer;
}
console.log(items);
