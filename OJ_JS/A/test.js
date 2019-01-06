// js 判断一个值是否是数字
const reg = /([0-9])([0-9])([0-9])/;
const number = 234;

let matches = number.toString().match(reg);
console.log(matches);
