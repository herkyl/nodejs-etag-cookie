var http = require('http');
http.createServer(function (req, res) {
	var etag = req.headers['if-none-match'] || 0;
	etag ++;
	res.writeHead(200, {'ETag': etag, 'Content-Type': 'text/plain'});
	res.end('Number of visits: ' + etag + ' (url: ' + req.url + ')');
}).listen(1337, '127.0.0.1');
console.log('Server running at http://127.0.0.1:1337/');