// 一道正则题目，给 字符串 中的数字添加 []
let testStr = 'We have p3resented and implemented an experimental Bluetooth mobile-based\
remote controller for Home 4 Entertainment Centre in the ubiquitous and mobile\
computing develop';

const format = str => {
  let res = str.replace(/(\d)/g, '{$1}')
  console.log(res);
}

format(testStr);