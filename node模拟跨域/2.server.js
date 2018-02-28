const http = require('http');
// 导入 node 自带的 http 包
const url = require('url');
// 用于解析 url 的字符串：用于解决 问题1： 区分 JSONP
const qs = require('querystring');
// 依旧是用于 解析 字符串(主要是'?'之后的 查询字符串 )：用于解决 问题2：不在后端限死回调函数的名字
const server = http.createServer((req, res) => {
	const urlPath = url.parse(req.url).pathname;
	// req.url 是一个 url 对象，其中的 pathname 为 IP端口地址 后面的 路径
	const urlQs = qs.parse(req.url.split('?')[1]);
	console.log(urlQs);
	if (urlPath === '/jsonp' && urlQs.callback) {
		// 我们自己设定的路径 jsonp ，前端的时候请求的时候需要请求这个路径
		let data = {
			name: 'ccc'
		}
		data = JSON.stringify(data);
		const callback = urlQs.callback + '(' + data + ')';
		res.end(callback);
	} else {
		res.end("hello, world, this is 127.0.0.1:3000");
	}

}).listen(3000);
console.log('Server is running');