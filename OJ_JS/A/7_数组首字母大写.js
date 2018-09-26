const Upper = (arr) => {
  const res = [];
  for (const item of arr) {
    const newItem = item[0].toUpperCase() + item.slice(1);
    res.push(newItem);
  }
  return res;
}

const test = ['apple', 'pear', 'banana'];
const res = Upper(test);
// console.log(res);


const str = "hahha chp qll";
// 纯正则方法 - 据说是阿里的一面题目
const regUpperStr = (str) => {
  return str.replace(/\b\w/g, function (match) {
    return match.toUpperCase();
  })
};
// console.log(regUpperStr(str));

const arr = [
  "apple",
  "woman",
  "man"
];

const regUpperArr = arr => arr.map(item => item[0].toUpperCase() + item.slice(1));
// console.log(regUpperArr(arr));


//  \b => 单词分界符
// 单词边界符能够匹配到 中文符号、英文符号、空格、制表符、回车符号、以及各种边界
//  \B => 非单词分界符
const regUpperArr2 = arr => arr.map(item => item.replace(/\b\w/, (innerItem) => innerItem.toUpperCase()));
console.log(regUpperArr2(arr));


const testStr = "hacx";
console.log(testStr.replace(/h/, 'a'));


