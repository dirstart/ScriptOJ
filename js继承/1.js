// https://segmentfault.com/q/1010000008450466?_ea=1651820

// "语法糖" 意指 现有的技术可以实现，但是采用某种写法更加优雅
// 例如 var a = { b:11 }  这就是语法糖

function Point(x, y) {
  this.x = x;
  this.y = y;
}
Point.prototype.toString = function() {
  return '(' + this.x + ', ' + this.y + ')';
}

const a = new Point(3, 4);
console.log(a.toString());

// 下方等同于上方

class Point2 {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  toString() {
    return '(' + this.x + ', ' + this.y + ')';
  }
}
const b = new Point2(1, 3);
console.log(b.toString());

// super = Component.prototype.constructor.call(this, props)