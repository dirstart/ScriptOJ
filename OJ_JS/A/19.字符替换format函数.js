/**
 * 曾经的阿里笔试题，也是现在深信服工作所用的 String.format 的类似实现
 * 今天看了一部动画，叫做 {0}，我感觉{1}.               碧蓝之海、非常好看
 * 分析：接受至少 1 个函数. 
 */

// 1.在ES6的环境下:

const regForBrace = /\{[\d]\}/g;
const strFormat = (str, ...rest) => {
  let result;
  // 这里面的逻辑琢磨了好一会，之前我竟然还傻逼的想通过自己赋值的办法
  // 自己赋值是很蠢的，因为字符串转数组再转回来，很耗时。还容易出错。
  while ((result = regForBrace.exec(str)) !== null) {
    let matchStr = result[0];
    let matchIndex = matchStr[1];
    str = str.replace(matchStr, rest[matchIndex] || 'error');
  }

  console.log(str);
  return str;
}

let string1 = "今天看了一部动画，叫做{0}，我感觉{1}. ";
strFormat(string1, "碧蓝之海", "非常不错");

strFormat("听说{0}，也很{1},顺序{3}, {2}", "刃牙", "好看", "111", "222");
