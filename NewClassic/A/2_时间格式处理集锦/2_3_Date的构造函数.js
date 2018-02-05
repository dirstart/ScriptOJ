// Date() 构造函数有五种使用方法

// 1. Date() 函数可以不带 new 操作符，像个函数一样使用。
// 由于 Date() 函数没有使用操作符，实际上它不能被成为构造函数
console.log(Date());
console.log(typeof Date()); // string

// 2. new Date() 创建一个 Date 对象，这才对嘛！
console.log(typeof new Date()); // object

// 3. new Date(dateString) 接受一个字符串的形式, 参数类似 Date.parse
// 但 parse() 方法返回的是一个数字，而 Date() 函数返回的是一个对象
console.log(typeof new Date('4/12/2018')); // object
console.log(typeof Date.parse(new Date('4/12/2018'))); // number

// 4. new Date(year, month, 等等) 和 Date.UTC() 参数格式一样
// 不过返回的是一个 对象。Date.UTC() 返回的是毫秒数

// 5. new Date(milliseconds) 可接受一个数字参数。
// 该参数设定为  1970 年 1 月 1日 0 点之间的 毫秒数.