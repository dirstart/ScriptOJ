// Date 对象没有可以直接读写的属性，所有对日期和时间的访问都需要方法.
// Date 对象的大多数方法分为两种形式：一种是使用本地时间，一种是使用UTC时间。
// Date 共有 46 个实例方法， 可以分为三类： to类、get类、set类

const date = new Date();
// 1.to类
console.log(date.toString());
console.log(date.toUTCString());
console.log(date.toISOString());
console.log(date);
console.log(date.toJSON());


// 2.get类
console.log(date.getTime());
// ES5 之前， 可以使用 getTime() 方法 实现 Date.now()
console.log(date.getYear()); // 118 =  2018 - 1900 = 118 (此方法已过时)
console.log(date.getFullYear()); // 2018


// 3.set类
console.log(date.setYear(2000), date.getFullYear()); 
