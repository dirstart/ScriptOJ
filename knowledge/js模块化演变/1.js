// 年轻的封装
var myModule = {
  a: 1,
  b: 2,
  f1: function () {
    console.log(this.a);
    return this.a;
  }
}
myModule.f1();
myModule.a = "他变了";
myModule.f1();

// 成熟一点的封装
var myModule2 = (function () {
  var a = 1;
  var b = 2;
  function f1 () {
    console.log(a);
    return a;
  }
  function f2 () {
    console.log(b);
    return b;
  }
  return {
    f1: f1,
    f2: f2
  }
})();

myModule2.f2();
myModule2.a = "他变了";
myModule2.f2();


