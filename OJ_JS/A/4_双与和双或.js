// 我们所要知道的是 -- && 的优先级要比 || 高
console.log(!! "   "); // true
console.log(!!"");     // false
console.log(!!" ");    // true

console.log("=========================");

const one1 = 3 && 7; // 7
const one2 = (!!"")&& 8; // false
const two1 = 3 || 8; // 3
const two2 = (!!"") || 8; // 8

// console.log(one1, one2, two1, two2);

const show = (...needles) => {
  for (const obj of needles) {
    console.log(obj);
  }
}

show(one1, one2, two1, two2);

console.log("========================");

const x = 0 && 2 || 3;   // 3, 若为 0 则表示 || 的优先级更高
const x2 = 3 || 2 && 0;  // 3
// 若是前面的先结合的话，则为 (3 || 2) = 3 => 3 && 0 => 0
// 但事实是  先 2&&0 => 0   =>   3 || 0  =>  3.
const y = (0 && 2) || 3; // 3
const z = 0 && (2 || 3); // 0   这里用来 ()来提升了||的优先级

show(x, x2, y, z);