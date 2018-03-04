
/* 每天都是快乐的一天，比如看到一个帖子 说了这么一个故事：
  面试一个5年的前端，却连原型链也搞不清楚，满口都是Vue，React之类的实现，
  这样的人该用吗？
  最后还是拒绝。还有其他的原因。一个问题，输入m.n参数，获取一个m长度的都是n的数组，
  不能用循环，他不会写。问他他们公司项目的webpack配置entry有几个，他一会说1个，一会说很多个，
  不知道他到底懂不懂。
  那么，为证明你的实力，请写出一个函数 initArray ，接受两个参数 m 和 n，返回一个数组
  ，它的长度是 m，每个值都是 n。
*/

// Method 1. ES6 - Array.fill(value, start, end);

const m = 10, n = 8;
console.log(new Array(10).fill(8));

//  Method 2. ES6 - Array.from(arrayLike, map, thisArg);

console.log(Array.from({length: m}, () => n));

//  Method 3. 递归的办法 。 真他么机智！！！！

const initArray = (m, n) => {
  let arr = [];
  const fn = (m) => {
    if (m > 0) {
      arr.push(n);
      return fn(m-1);
      // return arguments.callee(m-1);
      // 注意，这种写法的前提是 
      // 1.this 是对的。但这个时候因为 箭头函数的 this 的原因，不能这样用。
      // 2.没有用 'use strict'，因为严格模式下 arguments 是不允许操作的。
    }
  }
  fn(m, n);
  console.log(arr);
  return arr;
}
initArray(m, n);