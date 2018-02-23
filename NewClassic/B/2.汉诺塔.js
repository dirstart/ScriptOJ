// 经典汉诺塔，将 A 盘移动到 C 盘， B盘作为中转站
// 步骤：1. n-1 个盘子移到 B盘   2. 第 n 个盘子移到 C盘

// 本办法思考：礼让 和 到达 -------- 中转站其实是有变化的
// 3个。分为 1/2/3

// 总共只有 6 种 操作.
// 3
// A -> C
// A -> B
// C -> B

// A -> C

// B -> A
// B -> C
// A -> C

// 2
// A -> B
// A -> C
// B -> C

const hanoi = (n, from, to, middle) => {
  if (n >= 1) {
    hanoi(n-1, from, middle, to);
    console.log(from + '->' + to);
    hanoi(n-1, middle, to, from);
  }
}
hanoi(4, 'A', 'C', 'B');