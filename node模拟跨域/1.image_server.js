const http = require('http');
let number = 0;
const server = http.createServer((req, res) => {
  ++ number;
  console.log(number);
  res.end("加载了一次");
}).listen(3000);