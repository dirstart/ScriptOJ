// 搜索一段文字的，为其中的数字添加中括号

const str = "fjlwejf232lj3lj23l2j3";

console.log(str.replace(/(\d)/g, '[$1]'));