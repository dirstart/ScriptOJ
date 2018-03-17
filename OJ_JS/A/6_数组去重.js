// JS语言精粹 - 第三章 - 检索
// 要检索对象里包含的值，可以采用在 [] 后缀中括住一个字符串表达式

const one = [8, 3, 9, 101, 88, 8, 9, 33, 33];

const unique = (arr) => {
	let obj = {};
	let res = [];
	for (const i of arr) {
		if (!obj[i]) {
			obj[i] = true;
			res.push(i);
		}
	}
	return res;
}
console.log(unique(one));

const two = [8, 3, 9, 101, 88, '8', 9, '33', 33];
// 此处只有 9 应该被去除一个

const unique2 = (arr) => {
	let obj = {};
	let res = [];
	for (const i of two) {
		const type = typeof i;
		const name = type + i;
		if (!obj[name]) {
			obj[name] = i;
			res.push(i);
		}
	}
	return res;
}
console.log(unique2(two));

// 采用 ES6 的 Set, 只要一瞬间
const three = [8, '9', '8', 3, 9, 9, 3];
console.log(Array.from(new Set(three)));