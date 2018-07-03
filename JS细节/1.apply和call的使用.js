// 1.首先来谈谈 call 和 apply 的区别。
// Function.apply(obj, args)
// Function.call(obj, arg1, arg2, arg3)

// 定义一个人类
function Person(name, age) {
    this.name = name;
    this.age = age;
}

function Student(name, age, sex) {
    // Person.apply(this, arguments);
    Person.call(this, name, age);
    this.sex = sex;
}

let s1 = new Student('dd', 18, 'female');
console.log(s1);

// 2.call 和 apply 的妙用

// a. Math.max： 这个API本身不支持 数组作为参数
const array = [93, 2, 23, 294];
console.log(Math.max.apply(null, array)); // 294

// b. Array.prototype.push
let bArray = [1, 3, 9];
bArray.push(12, 124);
console.log(bArray);  // [1, 3, 9, 12, 124]

// 利用 apply 实现数组合并
let bxArray = [1, 3, 9];
Array.prototype.push.apply(bxArray, [12, 124]);
console.log(bxArray); // [1, 3, 9, 12, 124]