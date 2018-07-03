// 保持单例的几种 演变-历史。

// 1.最简单的对象字面量：简单、常用  - 没有封装性，所有属性方法都是暴露的，没有私有变量
var A = {
    attr: 1,
    method: function() {
        return this.attr;
    }
};

var a1 = A;
var a2 = A;
console.log(a1 === a2); // true


// 2.利用函数内部判断： 缺陷在于可以从外部改变 unique

function B() {
    if (B.unique !== undefined) {
        return B.unique;
        // 利用上面这句返回 实例
    }
    this.name = 'test';
    this.age = 24;

    B.unique = this;
}

var b1 = new B();
var b2 = new B();
console.log(b1 === b2); // true

B.unique = 'x';
var b3 = new B();
console.log(b1 === b3); // false

// 3.闭包的方式
var C = (function() {
    var unique;
    function someMethod() {
    }
    unique = new someMethod();
    return unique;
})();

var c1 = C;
var c2 = C;
console.log(c1 === c2);  // true    



