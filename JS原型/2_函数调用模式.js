// 当一个函数不是作为对象的属性，那么它就是作为函数被调用的。
// 所谓的 函数调用模式，这里有个JS语言的缺陷。以此模式调用，this指向全局.


// 这里还有个原则，谁调用函数则this指向谁。
// obj调用了out，所以this指向obj，而系统调用了test，这就是问题所在

var obj = {
  name: 'haah'
}

obj.out = function() {
  console.log(this.name);
  var test = function() {
    console.log(this == global); // true;
    console.log(this === global); // true;
    console.log(this.name);  // undefined;
    global.name = 8;  // 此句写在最外面也可以
    console.log(this.name); // 8
  }
  test();
}
obj.out();