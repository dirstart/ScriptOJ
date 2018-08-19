let target = "函数[ShiftMonth]{函数[Now]{}}+常量[10]";
let targetLen = target.length;
const reg = /\[(.+?)\]\{[^(\})]+\}\}/g;

let match = reg.exec(target)[0];
let matchIndex = reg.lastIndex; // 25

let left = match.split("").filter(item => item === "{").length;
let right = match.split("}").length - 1;

if (right >= left) {
  // 可以用 + 
  console.log("可以");
} else {
  // 不可以
}