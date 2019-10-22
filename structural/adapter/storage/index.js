import LocalStorageAdapter from './local-storage-adapter';

// обёртка для асинхронной работы localStorage
const storage = new LocalStorageAdapter(localStorage);

storage.setItem('foo', 'bar').then(() => doSomething());

function doSomething() {
  console.log('done');
}
