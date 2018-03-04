var d = new String('test');
console.log(Object.prototype.toString.call(d)); // [object String]
var b = new Array(3);
console.log(Object.prototype.toString.call(b)); // [object Array]