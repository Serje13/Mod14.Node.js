/*По этой ссылке находятся валюты Приват Банка в виде json 'https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5' Как отобразить эти данные используя только обычный html и javascript, без сервера?*/

//var a = document.getElementById('myPar');

function getJSON() {
  fetch('https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5').then(function(response) {
    var contentType = response.headers.get('content-type');
    if(contentType && contentType.includes('application/json')) {
      return response.json();
    }
    throw new TypeError("Oops, we haven't got JSON!");
  })
  .then(function(json) { 
    var arr = json;
    for (var i = 0; i < arr.length; i++) {
      var accesP = document.getElementById('myPar');
      var ol = document.createElement('ol');
      accesP.appendChild(ol);
      var accesOl = document.querySelector ('ol');
      var li = document.createElement('li');
      li.innerHTML = arr[i].ccy + ' by ' + arr[i].base_ccy + ' buy: ' + arr[i].buy + ' sale: ' + arr[i].sale;
      accesOl.appendChild(li);
    }
   })
  .catch(function(error) { console.log(error); });
}