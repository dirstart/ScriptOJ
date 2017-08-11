// 完成 extname 函数，它会接受一个文件名作为参数，你需要返回它的扩展名。
// 例如，输入 emoji.png，返回 .png。

// One
const extname = (filename) => {
	let position =filename.indexOf('.');
  if(position!==0 && position!==-1){
    filename=filename.split('.');
    postfix=filename.pop();
    return '.'+postfix
  }else{
    return ''
  }
}