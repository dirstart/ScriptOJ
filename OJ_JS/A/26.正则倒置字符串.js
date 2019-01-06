// 通过分组匹配获取倒置后的字符串

// 1.从倒置两个单词开始
const reverseWord = (str) => {
  const reg = /([a-z]*)\s([a-z]*)/g;
  // 1.1 replace
  // return str.replace(reg, '$2 $1');
  // 1.2 exec
  // const arr = reg.exec(str);
  // return `${arr[2]} ${arr[1]}`;
  // 1.3 exec 配合 RegExp.$符号
  // reg.exec(str);
  // reg.test(str);
  // return RegExp.$2 + RegExp.$1;
  return str.replace(reg, '$2 $1');
};

const testStr = 'apple tree';
console.log(reverseWord(testStr));
