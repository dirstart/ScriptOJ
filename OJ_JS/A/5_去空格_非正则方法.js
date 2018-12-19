let a = "   桃李春风  一杯酒，江湖夜雨   十年灯！    ";
// 1.my first
String.prototype.show = function() {
	console.log(this, "---长度为---", this.length);
	return this;
}
String.prototype.trim = function() {
	let res = [];
	let old = this.split('');
	old.forEach((item) => {
		if (item !== ' ') {
			res.push(item);
		}
	})
	res = res.join('');
	return res;
}
// a.show();
// console.log(a.trim());

// 2.my second ，在数组操作上的优化
const trim2 = (str) => {
	let res = [];
	let old = str.split('');
	res = old.filter(item => item !== ' ').join('');
	return res;
}
const b = trim2(a);
b.show();

// 4. 其实！！！！ ES5 之后本来就有 trim 方法。。。。

console.log("基本类型中自带的:", a.trim());