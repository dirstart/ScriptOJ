// 一个自己的需求，文件夹呢都是 1.png 2.png，我要改名字
// 其实就是 NodeJS 批量修改文件名称
const path = require('path');
const fs = require('fs');

// 像是遍历树节点一样，可以先遍历文件目录内的所有文件
const walk = (pathName, callback) => {
  const files = fs.readdirSync(pathName);
  files.forEach((file, index) => {
    if (fs.statSync(`${pathName}/${file}`).isFile() && file !== 'test.js') {
      callback(pathName, file, index);
    }
  });
};

// 修改文件名称
const rename = (oldPath, newPath) => {
  fs.rename(oldPath, newPath, (err) => {
    if (err) {
      throw err;
    }
  });
};

// 执行命令
walk(__dirname, (pathName, file, index) => {
  const oldPath = path.resolve(__dirname, file);
  const newPath = `${pathName}/test${index}.png`;
  rename(oldPath, newPath);
});
