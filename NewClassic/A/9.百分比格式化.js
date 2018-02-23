// 57.12 百分比格式化 57.12%
// 12.00 百分比格式化 12%
// 12.10 百分比格式化 12.1%
// 12.01 百分比格式化 12.01%
const one = [57.12, 12.00, 12.10, 12.01];
const format1 = (num) => {
	return parseFloat(num) + '%';
}
const oneRes = [];
for (const item of one) {
	const num = format1(item);
	oneRes.push(num);
}
console.log(oneRes);

// 正则。
const format2 = (num) => num.toString().replace(/(\.?0*$|$)/, '%');
// 解释一下：
// `\.`匹配 .    `?`表示 0个或者1个 .  `0*$`结尾的所有0
// `|$` 如果是整数，则直接在末尾 加上 '%'
one.forEach(item => console.log(format2(item)));
