// const Promise = require('bluebird');

const a = new Promise((resolve, reject) => {
  console.log(1);
  setTimeout(() => console.log(2), 0);
  console.log(3);
  console.log(4);
  resolve(true);
});

a.then(v => console.log(5));

const b = new Promise(() => {
  console.log(6);
  setTimeout(() => console.log(7), 0);
});

console.log(8);


// 1/3/4/6/8/2/7/5


// 那么，最后的执行顺序是。
// 我猜的第一次： 8 1 3 4 5 6 2 7
// 答案是：1 3 4 6 8 2 7 5

// 8 没有在前面，因为其实 这三者 a -> b -> 8  ，他们是同步的关系,a.then不包括在内。
// 所以，先执行 a 的同步部分部分： 1 3 4
// 接着执行 b 部分： 6
// 接着执行 8 部分： 8
// 然后执行 setTimeout 部分： 2
// 然后是 b的 异步部分: 7
// 最后是 a.then 的异步部分： 5

// 同步优先、异步靠边、回调垫底

// 第一级-同步部分： a/b/console.log(8)  13468
// 第一级-异步部分： 27
// 第二季-异步部分： 5
