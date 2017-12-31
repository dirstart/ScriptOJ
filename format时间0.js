const format = (date, str) => {
  return str.replace(/yyyy|MM|dd|HH|mm|ss/g, function(opt) {
    console.log(opt);
    return "a";
  });
}

format(new Date(), "yyyyxx");