const a = 0.1;
const format = (value) => {
	const res = (value * 100).toFixed(2);
  // toFixed - 可将 Number 四舍五入为指定小数位数的数字
	console.log(res);
}
format(a);

format(1);
// 当为 100 的时候，不应该为 100.00% ，有错