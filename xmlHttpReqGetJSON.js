/*По этой ссылке находятся валюты Приват Банка в виде json 'https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5' Как отобразить эти данные используя только обычный html и javascript, без сервера?*/


function getJSON() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var arr = JSON.parse(this.responseText);
      for (var i = 0; i < arr.length; i++) {
        var accesP = document.getElementById('myPar');
        var ol = document.createElement('ol');
        accesP.appendChild(ol);
        var accesOl = document.querySelector ('ol');
        var li = document.createElement('li');
        li.innerHTML = arr[i].ccy + ' by ' + arr[i].base_ccy + ' buy: ' + arr[i].buy + ' sale: ' + arr[i].sale;
        accesOl.appendChild(li);
      }
    }
  };
  xhttp.open('GET', 'https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5', true);
  xhttp.send();
}