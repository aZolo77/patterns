import { Dom } from './dom';

const buttons = Dom.get('button');

// Компоновщик собирает все элементы и работает с ними как с одним объектом
buttons.addClass('btn').addEventHandler('click', () => console.log('click'));
