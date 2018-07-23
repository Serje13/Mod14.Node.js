/*Создать сервер,чтоб по запросу localhost:3000 сервер выдавал нам Hello World, чтоб по запросу localhost:3000/about сервер выдавал нам данные о запросе в консоль, а по запросу localhost:3000/stop - останавливаем его. Усложнить, что по запросу localhost:3000/contact сервер возвращал страницу index.html.*/

var http = require ('http');
var fs = require ('fs');

http.createServer (function (req, res) {  
  if (req.url === '/') { 
  res.write('Hello World!');
  res.end();
  }

   if (req.url === '/about') { 
    console.log (req);
    res.write ('The request data was get!')
		res.end ();  
  }

  if (req.url === '/stop') { 
    server.close (function () {
      console.log ('Server stopped!');
    });
  }
  if (req.url === '/contact') { 
      res.writeHead (200, {'Content-type': 'text/html; charset=utf-8'});
      fs.createReadStream (__dirname + '/index.html').pipe (res);
  }
}).listen (3000, function () { 
	console.log ('Server at localhost:3000');
});