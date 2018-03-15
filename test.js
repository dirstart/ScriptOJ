function test(n) {
  this.x = n;
  return this;
}
var x = test(1);
var y = test(2);
console.log(x === y);  // true
console.log(x.x, y.x); // 2 2

