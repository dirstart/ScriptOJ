// 判断一个数字是否 >13 且 <25
const arr1 = [18, '12', 93];
const reg = /3/;

for (let i = 0; i < arr1.length; i++) {
  console.log(reg.test(arr1[i]));
}
