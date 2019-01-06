// 判断一个数字是否 >13 且 <25
const arr1 = [18, '12', 93, 13, 25];
// right1
const reg = /(1[4-9])|(2[0-4])/;

for (let i = 0; i < arr1.length; i++) {
  console.log(reg.test(arr1[i]));
}
