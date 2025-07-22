let a = 100;
let b = 101;
let c = 99;

if (a > b && a > c) {
  console.log("max: " + a);
} else if (b > c && b > a) {
  console.log("max: " + b);
} else {
  console.log("max: " + c);
}
