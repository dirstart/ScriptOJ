// 函数有四种调用模式：

// 1.方法调用模式
// A.函数也是对象，函数作为对象的一个属性被调用。标志性是提取符号'.'
// B.特点二，此时的 this 被绑定到该对象。

// 2.函数调用模式

// 3.构造器调用模式
// JS是一门基于原型继承的语言。意味着对象可以直接从其他对象继承属性。
// 如果一个函数前面带上 new 来调用，那么实际上会创建一个连接到 该函数的 prototype 成员的
// 新对象，同时 this 会被绑定到那个新对象上。
// new 前缀还会改变 return 语句的行为

// 4.apply调用模式 ：apply(this的值, 参数数组);
var obj1 = {};
obj1.show = function(str) {
  console.log(str);
}
var obj2 = {};
obj2.name = 'haha';
const array = Array.from(obj2.name);
obj1.show.apply(null, array);

// arguments 不是数组，它是类数组，它有长度，但没有任何数组拥有的方法

// 函数总会返回值
function kuilei() {
  // console.log('tets');
}
console.log(kuilei());
console.log(new kuilei());