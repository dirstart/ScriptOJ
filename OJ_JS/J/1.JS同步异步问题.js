for (let i = 0; i < 5; i++) {
  setTimeout(() => console.log(i), 1000);
}

// 1.想要隔一秒 输出一个
for (let i = 0; i < 5; i++) {
  setTimeout(() => console.log(i), 1000*i);
}
