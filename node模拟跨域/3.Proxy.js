const http = require('http');
const qs = require('querystring');
const request = require('request');
http.createServer((req, res) => {
  // 1. 这里是 截取前端要我们跨域的 域名  (前端 要我干啥 我就干啥)
  const proxyUrl = req.url.substr(req.url.indexOf('?') + 1);
  // 2. 前端给了我们 域名，  那么，我们用什么方法 去请求？ 前端也告诉了我们
  if (req.method === 'POST') {
    let post = '';
    // 用于暂存请求体的信息
    req.on('data', (chunk) => {
      post += chunk;
    });
    req.on('end', () => {
      console.log(post);
      post = qs.parse(post);
      request({
        method: 'POST',
        url: proxyUrl,
        form: post
      }).pipe(res);
    });
  }
}).listen(3000);