const http = require('http');

const server = http.createServer((req, res) => {
	if (req.url === '/') {
		res.end('<h1>Welcome to our home page</h1>');
	}
	if (req.url === '/about') {
		res.end('<h1>Welcome to our about page</h1>');
	}
	res.end(`<h1>OOPS!</h1>
    <a href='/'>BACK</a>
  `);
});

server.listen(5000);
