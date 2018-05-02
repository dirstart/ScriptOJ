// 由于 Node v6.10 并不支持 async/await - 暂时未找到合适的解决办法。除了升级
// 不过 Node v7.6 后面的版本都是支持的

// 如何将 异步 改成 同步
// 要求：使用 target 函数达成：按顺序输出 0-1-2-3...9
let doExe = (i, callback) => {
  setTimeout(() => {
    console.log(i);
    if (callback) callback();
  }, 100*Math.random());
};

let target = (num) => {
  for (let i = 0; i < num; i++) {
    doExe(i);
  }
};

// target(3);

// 将它 改成 按顺序执行。 不能改 doExe
// 其实函数 1，很像我们平时的 请求。返回时间不确定。

// 方法 1:
let x = 0;
const target1 = (num) => {
  doExe(x, () => {
    --num;
    ++x;
    if (num !== 0) {
      target1(num);
    }
  })
}
// target1(10);

// 方法2(async/await)：
// (async () => {
//   for (let i = 0; i < 10; i++) {
//     await new Promise(resolve => doExe(e, resolve));
//   }
// })();

// 方法3(不让用 async/await)：
const target3 = (num) => {
  let p = new Promise(res => doExe(0, res));
  for (let i = 1; i < num; i++) {
    p = p.then(() => new Promise(res => doExe(i, res)));
  }
}
// target3(10);

// 方法4：令人窒息的方法  -- 强行修改 Math.random -- 请勿模仿
for (let t = 0; t < 10; t++) {
  Math.random = () => t;
  doExe(t);
}
