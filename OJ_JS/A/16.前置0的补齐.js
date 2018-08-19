// 补0 是个挺常见的操作，今天主要为了解决 5 => 05/005 的问题

// way1 => 需要用到 Array.from => 兼容性问题。

const polish = (value, num) => {
  let v = value.toString();
  if (v.length < num) {
    let differ = num - v.length;
    v = Array.from(new Array(differ), x => 0).join('') + v;
  }
  return v;
}

polish(8, 3);   // 008

// way2 =>

const polish2 = (value, num) => {
  let len = value.toString().length,
      prefix = [];
  for (let i = 0; i < num - len; i++) {
    prefix.push(0);
  }
  return prefix.join('') + value;
};

console.log(polish2(3, 3));