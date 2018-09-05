// CommonJS
// 1.定义模块：一个单独的文件就是一个模块，每一个模块都是单独的作用域，除非定义 global 变量，否则无法被其他模块直接读取 => 真正的块级作用域
// 2.模块输出：只有一个出口 => module.exports
// 3.模块输入：require引入 => 返回文件内部的 module.exports.

var myModule = {
  a: 1,
  b: 2
};
module.exports = {
  myModule: myModule
};

var x = require('./2.js');
console.log(x);

// Node环境中，加载 require 是同步的 => 所以不会出现使用了未定义的模块这种情况 => 只要你写对。
// 浏览器中，用 document 插入 script 实现，确实异步的.

// AMD: Asynchronous Module Definition => 异步模块定义(大名鼎鼎的 RequireJS))
// 1.多个js文件可能有依赖关系，被依赖的文件需要早于依赖它的文件加载到浏览器  => 想到了 webpack => 也想到了了 Vue 的父子组件渲染顺序问题
// 2.js加载的时候浏览器会停止页面渲染，加载文件越多，页面失去响应时间越长 => 这个跟 图片代理 的逻辑可能是相似的？延迟加载？


// define([
//   'require',
//   'dependency'
// ], function(require, factory) {
//   'use strict';
//   console.log(require, factory);
// });

// equire()函数在加载依赖的函数的时候是异步加载的 => 这玩意不就是回调吗 => 想vue-router的懒加载/图片的懒加载

// CMD：Sea.js 就是这么发展出来的 => 我的公司总部的云平台项目就是用 Sea 打包的。


// AMD与CMD 的区别  => 共同点都是异步加载  => 只不过 AMD 相当于你把字典的目录背下来了(用的时候就快了)) => CMD相当于没有背下来 (一开始效率高了点把))

var result = '1.AMD推崇依赖前置，在定义模块的时候就要声明其依赖的模块';
var result2 = '2.CMD推崇就近依赖，只有在用到某个模块的时候再去require';