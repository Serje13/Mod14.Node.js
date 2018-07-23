/*По этой ссылке находятся валюты Приват Банка в виде json 'https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5'. Задание: попробовать с помощью Node, отобразить эти данные у себя в консоли или же вывести в ответ на запрос сервера.*/

var request = require('request');
request('https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5', function (error, response, body) {
  if (!error && response.statusCode == 200) {
     var impJSON = JSON.parse(body);
     console.log(impJSON);
  }
  else {
    console.warn(error);
  }
})