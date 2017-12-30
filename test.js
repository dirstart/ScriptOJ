this.code += String.fromCharCode(Math.floor(Math.random() * 255));

console.log(String.fromCharCode(72,69,76,76,79));
// fromCharCode() 可以接受一个指定的Unicode值，然后返回一个字符串.
// 返回 "HELLO"

setInterval(() => {
  console.log(String.fromCharCode(Math.random() * 255));
}, 100);
