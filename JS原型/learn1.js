// 对象通过引用来连接，他们永远不会被复制
var x = {};
x.nickname = 'test';
var y = x;
y.nickname = 'python';
console.log(x.nickname); // python

// 创建一个使用原对象作为原型的新对象
if (typeof Object.beget !== 'function') {
  // 但是这个判断又是什么意思呢？
  Object.create = function(o) {
    var F = function () {};
    F.prototype = o;
    return new F();
  }
}


var a = {};
a.name = 'soul';
var b = Object.create(a);
b.name = 'god';
console.log(a.name); // soul, 没有被改变

// 原型关系是动态的
a.key = 888;
console.log(b.key); // 888


console.log(b.hasOwnProperty('constructor')); // false 这是原型链的
console.log(b.hasOwnProperty('key')); // false 这是 a传过来的

b.secret = 99;
console.log(b.hasOwnProperty('secret')); // true

console.log(a.hasOwnProperty('constructor')); // false 对a来说，这些方法也是原型链的

console.log('-------');

for (var x in b) {
  console.log(x);  // a、b里的东西都会有
}

console.log('----');

// delete运算符用于删除对象中的属性，
// 不会触及原型链中的任何对象
delete b.secret;
console.log(b.secret);
console.log(b.name);  // god
delete b.name;        
console.log(b.name);  // a原来的soul被暴露出来了
delete b.name;
console.log(b.name);  // a里面的name不会被删掉