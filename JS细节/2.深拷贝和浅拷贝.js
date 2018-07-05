// 什么是浅拷贝：只拷贝了 基本类型的数据，浅复制 仅仅是 指向了 被复制块 的内存地址。
//              当原地址对象改变，浅复制的对象也会改变。

// 什么是深拷贝：在计算机开辟一块新的内存地址用于存放复制的对象。

// 浅复制实例
var obj = {
    a: 1,
    arr: [2, 0],
    second: {
        third: 'new'
    }
};

function shallowCopy(src) {
    var newObj = {};
    for (var prop in src) {
        newObj[prop] = src[prop];
    }

    return newObj;
};

console.log(shallowCopy(obj));

obj.arr.push(88);

console.log(shallowCopy(obj));

// 深复制实例  -- 通过递归完成的深复制

function deepCopy(dest, src) {
    let res = dest || {};
    for (let attr in src) {
        if (typeof src[attr] === 'object') {
            if (src[attr].constructor === Array) {
                res[attr] = [];
            } else {
                res[attr] = {};
            }
            deepCopy(res[attr], src[attr]);
        } else {
            res[attr] = src[attr];
        }
    }
    return res;
};

var deepObj = {
    name: '123',
    arr: [10],
    second: {
        third: 'old'
    }
};
console.log('原来', obj, deepObj);
console.log('深拷贝后', deepCopy(deepObj, obj));

