import config from '@config';

function getMovies(title, callback) {
  var xhr = new XMLHttpRequest();
  xhr.open(
    'GET',
    `http://www.omdbapi.com/?apikey=${config.API_KEY_OMDB}&s=${title}`,
    true,
  );

  xhr.send();
  xhr.onreadystatechange = function() {
    if (this.readyState != 4) return;
    // по окончании запроса доступны:
    // status, statusText
    // responseText, responseXML (при content-type: text/xml)

    if (this.status != 200) {
      // обработать ошибку
      alert('ошибка: ' + (this.status ? this.statusText : 'запрос не удался'));
      return;
    }

    callback(JSON.parse(this.responseText));
  };
}

export { getMovies };
