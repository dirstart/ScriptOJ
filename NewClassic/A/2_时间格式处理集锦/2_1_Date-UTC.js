// Date 有三种静态方法： Date.now, Date.parse, Date.UTC


// 1. Date.now()  ECMAScript5新增了now()方法，
//  该方法返回当前时间距离1970年1月1日0点UTC的毫秒数。该方法不支持传递参数
// (+ new Date())  === Date.now(new Date());
const pre1 = Date.parse(new Date()); // 1517828782000
const pre2 = Date.now(new Date());   // 1517828814628
const pre3 = (+ new Date());         // 1517828814628
console.log(pre1, pre2, pre3);
console.log("Date.now() is end\n");

// 2. Date.parse() 该方法用于解析一个日期字符串，参数是一个包
//  含待解析的日期和时间的字符串，返回从1970年1月1日0点到给定日期的毫秒数
// a. '月/日/年' 如 '6/13/2008'
// b. '月 日,年' 如 'Jan 1,2004'
// c. '星期 月 日 时:分:秒 时区' 如 'Tue May 2004 00:00:00'
// X. 字符串无法识别一律返回 NaN
console.log(Date.parse('8/12/2008'));
console.log(Date.parse('Aug 12, 2008'));
console.log(Date.parse('auG 12, 2008')); // 说明了不区分大小写
console.log(Date.parse('12 12')); // 会返回时间戳。
console.log(Date.parse('haha'));  // NaN
console.log("Date.parse() is end\n");

// 3. Date.UTC() Date.UTC()同样返回给定日期的毫秒数，但其参数
// 并不是一个字符串,而是分别代表年、月、日、时、分、秒、毫秒的数字参数
// Date.UTC(year, month, day, hours, minutes, seconds, ms)
// year 和 month 固定，其余参数可选
console.log(Date.UTC(1980));
console.log(Date.UTC(1980, 12));
console.log("Date.UTC() is end\n");
