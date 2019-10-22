// Адаптер — это дополнительный класс, который позволяет объектам с несовместимыми интерфейсами работать вместе

// ==========================================================================================================
export default class HttpAdapter {
  constructor(http) {
    this.http = http;
  }

  get(url) {
    return new Promise((res, rej) => {
      this.http.request('GET', url, null, res);
    });
  }

  post(url, data) {
    return new Promise((res, rej) => {
      this.http.request('POST', url, data, res);
    });
  }

  put(url, data) {
    return new Promise((res, rej) => {
      this.http.request('PUT', url, data, res);
    });
  }

  delete(url) {
    return new Promise((res, rej) => {
      this.http.request('PUT', url, null, res);
    });
  }
}
