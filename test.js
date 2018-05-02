
let num = 0;

// for (let i = 0; i < 1000000000; i++) {
//   ++num;
// };

// console.log('最后的数字是', num);


setTimeout(() => {
  for (let i = 0; i < 1000000; i++) {
    ++num;
  }
}, 0);

console.log('最后的数字是', num);