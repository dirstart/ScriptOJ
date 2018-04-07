//  for ... in 遍历的是数组的索引
//  for ... of 遍历的是数组元素值

const isLeapYear = (...needles) => {
  for (const obj of needles) {
    if ((obj % 4 === 0 && obj % 100 !==0) || obj % 400 === 0) {
      console.log(obj + "是闰年");
      continue;
    }
    console.log(obj + "不是闰年");
  }
}
isLeapYear(2004, 2000, 500);

// 四年一闰，一百年不闰，四百年再闰。