// js 本身不提供这种 停滞 2s 的操作。这里的停滞指的是代码整体的停滞，而不是部分函数的停滞。

// way0: 强扭的瓜，强行耗空资源

const delay0 = (time) => {
  let old = new Date().getTime();
  while (true) {
    if (new Date().getTime() - old >= time) {
      break;
    }
  }
}

// delay0(2000);
// console.log("延时函数第一");

// way1: setTimeout 实现 => 这意味着，我们不能从全局的角度来使用它

const delay1 = (pre, time) => {
  let delayTime = time || 2000;

  setTimeout(pre, delayTime);
};

// delay1(() => console.log(123));

// way2: 新时代的 Promise 

const delay2 = (pre, time) => {
  return new Promise((resolve, rejct) => {
    let timer = time || 2000;
    setTimeout(() => {
      pre();
      resolve();
    }, timer);
  });
};

// delay2(() => console.log('haha'));

// way3: 传说中的最佳方案？也许吧。 async/await

const delay3 = (time) => {
  // 这里用 let 会报重复定义的错 => 因为 let 是不允许块内 重复定义的。
  var time = time || 2000;
  return new Promise((resolve) => setTimeout(resolve, 2000));
}

(async () => {
  await delay3();
  console.log('hh');
})() 