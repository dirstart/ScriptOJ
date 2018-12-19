var str = ''; // 用于存放 \x00-\xff 这256个字符
for(var i=0; i<=255; i++) {
    str += String.fromCharCode(i); // 填充字符
}


console.log(str);
var c='', // 存放转码后的字符
    re,   // 存放动态生成的表达式
    m;    // 存放匹配结果

for(var i=65; i<=90; i++) { // ascii 65-90 分别对应字符 A-Z
    c = String.fromCharCode( i ); // 转为字符 A-Z
    re = RegExp('\\c'+c); // 生成正则表达式 \cA-\cZ
    m = str.match(re); // 进行匹配
    if(m) { // 如果匹配到了就输出
        console.log(i, re, escape(m[0]) ); // 输出 ascii码, 正则, 匹配到的字符
    }
}


console.log("--------------");

let _str = String.fromCharCode(1);
const _reg = /\cA/;
console.log("!!", _str.match(_reg)[0]);