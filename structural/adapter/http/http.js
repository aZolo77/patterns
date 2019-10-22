const http = {
  request(type, url, data, done) {
    const request = new XMLHttpRequest();

    request.onload = function() {
      if (request.status === 200) {
        done(request.responseText);
      }
    };

    request.open(type.toUpperCase(), url);
    request.send(data);
  }
};

export default http;
