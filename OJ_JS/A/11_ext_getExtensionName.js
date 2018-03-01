//   首页题：https://scriptoj.com/

// 完成 extname 函数，它会接受一个文件名作为参数，你需要返回它的扩展名。
// 例如，输入 emoji.png，返回 .png。

const testArray = ["emoji.png", "xx.jpg", "hello", ".ppp", ".", "yyy.", "1.1.avi"];
const Show = (method) => {
  console.log("\n");
  console.log("==============开始=============")
  testArray.forEach((item) => {
    method(item);
  });
}

const One = (str) => {
  const position = str.indexOf('.');
  if (position !== -1 && position !== 0) {
    console.log("." + str.split(".").pop());
  } else {
    console.log("不是合法的文件名");
  }
}
Show(One);

// Next  我自己的正则方法，不错吧~

const Two = (str) => {
  const reg = /^\S+(\..*)$/g;
  if (reg.test(str)) {
    reg.lastIndex = 0; // 因为 reg.exec 方法会从 全局的正则中 获取上一次的位置。得清零。
    console.log(reg.exec(str)[1]);
  } else {
    console.log("非法文件名");
  }
}

Show(Two);