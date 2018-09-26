const str = "1去23里，烟村45家";

const addBracket = (str) => {
  return str.replace(/\d/g, function (match) {
    return '[' + match + ']';
  })
};

console.log(addBracket(str));



// 如果不在 \d 外面加括号，后面的 $1 就只是普通的字符串而已
const addBracket2 = (str) => {
  return str.replace(/(\d)/g, '[$1]');
};

console.log(addBracket2(str));