const format = (value, format = "yyyy-MM-dd hh:mm:ss") => {
    const date = new Date(value);
    const o = {
        "M+": date.getMonth() + 1, // 月份(0-11)
        "d+": date.getDate(), // 日
        "h+": date.getHours(), // 小时
        "m+": date.getMinutes(), // 分
        "s+": date.getSeconds(), // 秒
        "q+": Math.floor((date.getMonth() + 3) / 3), // 季度
        "S": date.getMilliseconds() // 毫秒
    };
    let fmt = format;
    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1,
    (`${date.getFullYear()}`).substr(4 - RegExp.$1.length));
        // 此句为了 当我们写 'yyy' 的时候，只返回 三位
    Object.keys(o).forEach((k) => {
        if (new RegExp(`(${k})`).test(fmt)) {
            // 这里其实是 判断我们的 fmt 有多少东西。
            console.log('test', k);
            fmt = fmt.replace(RegExp.$1,
            (RegExp.$1.length === 1) ?
            (o[k]) :
            ((`00${o[k]}`).substr((`${o[k]}`).length)));
        }
        // 1.此句为了 当分钟数或者秒数或者..... 为 个位数的时候 显示 '01', '02', '08'之类的
        // 2.一般情况下，没有 "q+" 和 "S" 的匹配了。具体看 fmt 是否有东西。
        // 3.
    });
    return fmt;
};

const one = new Date();
console.log(format(one));
