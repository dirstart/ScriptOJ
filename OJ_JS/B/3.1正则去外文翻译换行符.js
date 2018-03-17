// 毕业设计外文翻译中。pdf的英文的断行问题。
// 在谷歌上翻译总是因为行数的问题翻译不准确

// 测试办法 - 1.去除换行符 2.去除换行符处的连字符 3.放到谷歌翻译能成为一句话
/*
We have presented and implemented an experimental Bluetooth mobile-based
remote controller for Home Entertainment Centre in the ubiquitous and mobile
computing development environment. The project has successfully applied the
Bluetooth and Java Technology to achieve the idea of accessing Home Entertain-
ment Centre by using mobile phone devices as game remote controllers. We have
described the overall architecture and discusses, in detail, the implementation
steps taken to implement the Bluetooth and Android based remote controller for
context-aware multi-player games. We believe that Bluetooth is a good candidate
in wireless networking technology and can make a significant contribution towards
distributed applications in a mobile remote control game in a ubiquitous system
environment.
*/

// 解决方案 - 1.正则匹配 2.写入txt文件 3.跑去谷歌翻译论文

// 异步
// fs.readFile('F:/testFS.txt', 'utf8', function(err, data) {
//   console.log(data);
// });
// 上面注释的这句话是异步代码，可以先执行下面的内容，再执行下面的。
// let x = fs.readFileSync('F:/testFS.txt', 'utf8');
// 上面这句话是同步代码，没执行完上面这句话，下面不会继续
// fs.writeFile('F:/testFS.txt', '这是第一行', function(err) {
//   if (err) console.log('写文件失败');
//   else console.log('写文件操作成功');
// })
// 上面的这句话是异步写入代码
// 同步办法如下
// fs.writeFileSync('F:/testFS.txt', '这是第二行');

let fs = require('fs');
let testStr = `We have presented and implemented an experimental Bluetooth mobile-based
remote controller for Home Entertainment Centre in the ubiquitous and mobile
computing development environment. The project has successfully applied the
Bluetooth and Java Technology to achieve the idea of accessing Home Entertain-
ment Centre by using mobile phone devices as game remote controllers. We have
described the overall architecture and discusses, in detail, the implementation
steps taken to implement the Bluetooth and Android based remote controller for
context-aware multi-player games. We believe that Bluetooth is a good candidate
in wireless networking technology and can make a significant contribution towards
distributed applications in a mobile remote control game in a ubiquitous system
environment.`;
const format = (str) => {
  const reg = /\n/g;
  console.log(str.replace(reg, ' '));
  return str.replace(reg, ' ');
}

let res = format(testStr);
fs.writeFile('F:/testFS.txt', res);
// 这里出现了一个问题，原生的 JS 好像很难实现一个多行
// 字符串，不过使用 ES6 的 ``语法就非常容易实现了。

// 经过谷歌翻译的测试 -  这个案例 成功了  ！！！！

// 接下来，应该想办法让这个 工具方便使用。 请看下节。

