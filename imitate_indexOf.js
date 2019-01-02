Array.prototype.imitate = function imitate(index) {
  const res = -1;
  for (let i = 0; i < this.length; i++) {
    console.log('this[i]', this[i]);
    if (index == this[i]) {
      return i;
    }
  }
  return res;
};
// 需要注意的是，用 ES6 箭头函数的时候要小心 this
String.prototype.imitate = Array.prototype.imitate;

const test = 'chinese';

console.log(test.imitate('i'));

// var array=['123','2'];
// console.log(array.imitate('2'));
