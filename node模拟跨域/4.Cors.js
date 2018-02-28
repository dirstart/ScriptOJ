const http = require('http');

http.createServer((req, res) => {
  if (req.headers.origin) {
    console.log(req.headers.origin);
    res.writeHead(200, {
      "Content-Type": "text/html; charset=UTF-8",
      "Access-Control-Allow-Origin": 'http://localhost',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
      'Access-Control-Allow-Headers': 'X-Requested-With, Content-Type'
    });
    res.write('ha');
    res.end();
  }
}).listen(3000);