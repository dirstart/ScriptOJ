// 郑重声明：其实这种基本都是 类数组对象 转为 数组。
// 非类数组 对象一般不存在这种需求。就我下述方法，也不能够转换 非类数组。
// 本案例主要用来说明为什么我们常用 Array.slice.call(arguments)来转数组，先来一道开胃菜
const obj = {
  name: 'test',
  age: 38,
};

// eslint 不推荐
// const arr = [];
// for (const i in obj) {
//   if (obj.hasOwnProperty(i)) {
//     arr.push(obj[i]);
//   }
// }
// console.log(arr);
// eslint推荐使用，利用Object.keys，返回的是 对象自身的所有可遍历属性键值
const keyArr = [];
const valueArr = [];
Object.keys(obj).forEach((item) => {
  keyArr.push(item);
  valueArr.push(obj[item]);
});
console.log('开胃菜：', keyArr, valueArr);

// 模仿slice
Array.prototype.mySlice = function (...rest) {
  let start;
  let end = rest.length;
  const [first, second] = rest;
  if (end === 1) {
    start = first;
  } else if (end === 2) {
    start = first;
    end = second;
  }
  const result = [];
  for (let i = start; i < end; i++) {
    result.push(this[i]);
  }
  return result;
};
console.log([].mySlice.call(obj));
// 类数组对象 = 有长度 并且 有索引的对象
const arrayLike = {
  0: 'name',
  1: 'haha',
  length: 2,
};
console.log([].slice.call(arrayLike));
console.log([].slice.call(obj));
console.log('Array.form', Array.from(arrayLike), Array.from(obj));
