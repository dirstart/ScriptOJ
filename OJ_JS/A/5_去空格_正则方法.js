const one = "   桃李春风  一杯酒，江湖夜雨   十年灯！    ";
console.log(one, one.length);
// 1.只去掉头的空格
const trimHead = (str) => {
  const res = str.replace(/^\s*/, "");
  console.log(res, res.length);
}
trimHead(one);
// 2.只去掉尾
const trimTail = (str) => {
  const res = str.replace(/\s*$/, "");
  console.log(res, res.length);
}
trimTail(one);
// 3.去掉首尾的空格
const trimHeadTail = (str) => {
  const res = str.replace(/(^\s*)|(\s*$)/g, "");
  // const res = str.replace(/^\s*|\s*$/g, "");
  console.log(res, res.length);
}
trimHeadTail(one);

// 4.去掉所有的空格
const trimAll = (str) => {
  const res = str.replace(/\s*/g, "");
  console.log(res, res.length);
}
trimAll(one);
