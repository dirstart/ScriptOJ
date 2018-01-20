// 可以先看一遍 Date对象方法
// getDate,getDay,getMonth,getFullYear(getYear已经被弃用了)
// getHours,getMinutes,getSeconds

// substr(start, length) "slfjlsjf".substr(0,4)  => "slfj"
//                       "slfjlsjf".substr(1,4)  => "lfjl"
// substring(start, end) "slfjlsjf".substring(0,4) => "slfj"
//                       "slfjlsjf".substring(1,4) => "lfj"
// 不改变原数组

/***************************************/

// 方法一.我自己的方法
/***************************************/ 




// 方法二.来自web http://blog.csdn.net/tomcat_2014/article/details/50514979
/****************************************/ 

// 方法三.传奇代码，不知来源
/****************************************/ 
// const pre = new Date();
// // 默认参数str，表示转换格式为  yyyy-MM-dd hh:mm:ss
// const format = (date, str = "yyyy-MM-dd hh:mm:ss") => {
//   const o = {
//     "Y": date.getFullYear(),
//     "M": date.getMonth() + 1,  // 月份从0开始，因此需要+1
//     "d": date.getDate(),
//   }
//   return o;
// }

// console.log(format(pre, "yyyy-MM"));