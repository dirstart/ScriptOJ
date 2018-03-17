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
  // console.log("原来的样子:", str);
  const reg = /\n/g;
  console.log(str.replace(reg, ' '));
}
format(testStr);

// 这里出现了一个问题，原生的 JS 好像很难实现一个多行
// 字符串，不过使用 ES6 的 ``语法就非常容易实现了。