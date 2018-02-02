const format = (value, format="yyyy-MM-dd hh:mm:ss") => {
    const date = new Date(value);
    const o = {
        "M+": date.getMonth() + 1,
        "d+": date.getDate(),
        "h+": date.getHours(),
        "m+": date.getMinutes(),
        "s+": date.getSeconds(),
        "q+": Math.floor((date.getMonth() + 3) / 3)
    };
    let fmt = format;
    if (/(y+)/.test(fmt)) {
        fmt = fmt.replace(RegExp.$1,
            (`${date.getFullYear()}`).substr(4 - RegExp.$1.length));

        Object.keys(o).forEach((k) => console.log(k));
    }
}

// const one = new Date();
// format(one);

const parent = Object.create(Object.prototype, {
    a: {
        value: 1,
        writable: true,
        enumerable: true,
        configurable: true
    }
})