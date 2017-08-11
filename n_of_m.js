
// 每天都是快乐的一天，比如看到一个帖子 说了这么一个故事：

// 面试一个5年的前端，却连原型链也搞不清楚，满口都是Vue，React之类的实现，
// 这样的人该用吗？
// 最后还是拒绝。还有其他的原因。一个问题，输入m.n参数，获取一个m长度的都是n的数组，
// 不能用循环，他不会写。问他他们公司项目的webpack配置entry有几个，他一会说1个，一会说很多个，
// 不知道他到底懂不懂。
// 那么，为证明你的实力，请写出一个函数 initArray ，接受两个参数 m 和 n，返回一个数组
// ，它的长度是 m，每个值都是 n。
// One
var a=(new Array(10)).fill(1);
console.log(a);

const initArray=(m,n)=>(new Array(m)).fill(n);

//  Two

const initArray2=(m,n)=> Array.from({length:m},()=>n);

console.log(initArray2(8,0));

// Three

const initArray = (m, n) => {
  /* TODO */
  let arr = []
  
  const fn = (m) => {
    if (m > 0) {
      arr.push(n)
      return fn(m-1)
    }
  }
  fn(m)
  return arr
}