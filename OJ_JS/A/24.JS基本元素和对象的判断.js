/**
 * ES3
 * 1.JS判断是否是数字
 * 2.是否是数组
 * 3.是否是对象
 * 4.是否是函数
 * 
 * typeof + Object.prototype.toString.call
 * 
 * ES6
 * isArray ?
 */

let util = {};

util.isNumber1 = function (a) {
  // 注意，这里的话 NaN 也是数字。并不是坑，而是本来就是如此
  return Object.prototype.toString.call(a) === "[object Number]"
};

let arr = ["8", 8, "", NaN, "  ", false, undefined, {}, []];
for (let i = 0; i < arr.length; i++) {
  // console.log("number", util.isNumber1(arr[i]));
}

/**
 * 才想起来刚开始学 JS 的时候看到过。其实基本类型没啥好判断的，用 typeof 就可以了
 */
// var keyMap = {
//   "undefined": function (target) {
//     return typeof target === "undefined";
//   },
//   "number": function 
// }

// 使用 arguments.callee 则不需要使用 keyMap 方法(本意使用 keyMap 取代 switch)
util.baseType = function (type, target) {
  if (["undefined", "number", "string", "boolean", "function", "object"].indexOf(type) > -1) {
    console.log("使用typeof进行匹配");
    return typeof(target) === type;
  } else if (["String", "Number", "Boolean", "Array", "Date", "RegExp"].indexOf(type) > -1) {
    console.log("无法用typeof进行匹配，使用 Object.prototype.toString.call()来匹配");
    return Object.prototype.toString.call(target) === '[object ' + type + ']';
  } else {
    console.log("不是JS基本数据类型也不是JS内置对象/原生对象，无法判断！");
  }
}

// var testArr = [undefined, new String(3)];
// for (var i = 0; i < testArr.length; i++) {
//   console.log("result is：", util.baseType("String", testArr[i]));
// }

// 在这里用正则专门判断一下数字。因为上面的方法其实 会放过 NaN，而 NaN 往往是我们不愿意在网页中显示的。
// 判断字符串是否为纯数字 + 判断是否是数字(正整数、自然数、整数)
util.pureNumber = function (type, value) {
  var result;
  switch (type) {
    case "positive":
      // 1,2,3...
      console.log("positive");
      result = /^[1-9]+[0-9]*$/.test(value);
      break;
    case "natural":
      // 0,1,2...
      console.log("natural");
      result = /^\d+$/.test(value);
      break;
    case "integer":
      // -1,0,1...
      console.log("integer");
      result = /^(\-|\+)?\d*$/.test(value);
      break;
    case "float":
      console.log("float");
      result = /^(\-|\+)?\d+(\.\d+)?/.test(value);
      break;
    default:
      console.log("type is default.");
  };
  console.log("结果：", result, "数字：", value);
  return result;
}

var testArr = ["3333", "333N", 2349, -242, 0, NaN, 3.3, -2.3];
for (var i = 0; i < testArr.length; i++) {
  // util.pureNumber("positive", testArr[i]);
  // util.pureNumber("natural", testArr[i]);
  // util.pureNumber("integer", testArr[i]);
  util.pureNumber("float", testArr[i]);
}

// keyMap 方法对上面函数进行优化
