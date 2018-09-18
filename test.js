// 实现返回一个斐波那契函数

// let arr = [];
// (function feibo (num) {
//   if (num === 1 || num === 2) {
//     if (arr.length < 2) {
//       arr.push(1);
//     }
//     return 1;
//   }
//   var result = arguments.callee(num - 1) + arguments.callee(num - 2);
//   if (result > arr[arr.length - 1]) {
//     arr.push(result);
//   }
//   return result;
// })(10);

// console.log(arr);

// [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]

let arr = [];
function methodTwo (num) {
  // return ((num) => {
    if ((num === 1 || num === 2)) {
      if (arr.length < 2) {
        arr.push(1);
      }
      return 1;
    }
    var result = arguments.callee(num - 1) + arguments.callee(num - 2);
    if (result > arr[arr.length - 1]) {
      arr.push(result);
    }
    return result;
  // })(num);
}

methodTwo(3);
console.log(arr);

