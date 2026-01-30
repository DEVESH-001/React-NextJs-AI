// 1->printing year
const date = new Date();
console.log(date.getFullYear());

// 2-> concatenate 2 var

var first = "devesh";
var last = "yadav";
console.log(first + "" + last);

// 3 -> type of var

var a = true;
console.log(typeof a);

// 4 ->
var age = 24;

if (age < 18) console.log(true);
else console.log(false);

// 5
console.log(100 / 0);

// 6->

//const pi = 3.14
const pi = Math.PI;
console.log(pi);

// 7-> re-assigning a value

let ab = 12;
ab = 20;
console.log(ab);

// 8-> null ka type is object
console.log(typeof null);

// 9->

let aa = "hey",
  bb = 12,
  cc = true;
console.log(aa, bb, cc);

// 10 -> for loop

// for (let i = 1; i <= 5; i++) {
//   console.log(i);
// }

// 12-> while loop

// let whileloop = 1;
// while (whileloop < 15) {
//   console.log("sher");
//   whileloop++;
// }

// 13 ->

let str = "javascript";
for (let devesh of str) {
  console.log(devesh);
}
