// 可以先看一遍 Date对象方法
// getDate,getDay,getMonth,getFullYear(getYear已经被弃用了)
// getHours,getMinutes,getSeconds

// substr(start, length) "slfjlsjf".substr(0,4)  => "slfj"
//                       "slfjlsjf".substr(1,4)  => "lfjl"
// substring(start, end) "slfjlsjf".substring(0,4) => "slfj"
//                       "slfjlsjf".substring(1,4) => "lfj"
// 不改变原数组

const pre = new Date();
// 默认参数str，表示转换格式为  yyyy-MM-dd hh:mm:ss
const format = (date, str = "yyyy-MM-dd hh:mm:ss") => {
  const o = {
    "Y": date.getFullYear(),
    "M": date.getMonth(),
    "d": date.getDate(),
  }
  return o;
}

console.log(format(pre, "yyyyy"));