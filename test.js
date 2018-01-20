const format = (value, str = "yyyy-MM-dd hh:mm:ss") => {
  const date = new Date();
  const o = {
    // "y+": date.getFullYear(),
    "M+": date.getMonth() + 1,
    "d+": date.getDate()
  }
  console.log(o);
  let fmt = str;
  if (/(y+)/.test(fmt)) {
    // fmt = fmt.replace(RegExp.$1, (`${date.getFullYear()}`).substr(4 - RegExp.$1.length))
    fmt = fmt.replace(RegExp.$1, (`${date.getFullYear()}`).substr(4 - RegExp.$1.legnth));
    console.log(fmt);
  }

  Object.keys(o).forEach((k) => {
    // 拿o的属性作为正则
    if (new RegExp(`(${k})`).test(fmt)) {
      // 在这里，写 new RegExp(`${k}`)是不对的
      // 需要写     new RegExp(`(${k})`)才是对的
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) :
          ((`00${o[k]}`).substr((`${o[k]}`).length)));
      console.log(RegExp.$1.length);
    }
  })

  return fmt;
}

format(new Date(), "yyyyy-MM-dd");
console.log(format(new Date(), "yyyyy-MM-dd"));

