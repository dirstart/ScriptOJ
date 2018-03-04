var text = /000-00-000/;
var pattern = /\d{3}-\d{2}-\d{3}/;
if (pattern.test(text)) {  // true
  console.log("成功匹配"); // 成功匹配
}