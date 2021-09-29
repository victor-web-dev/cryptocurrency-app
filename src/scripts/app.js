import { createCard, createContainer } from './createElements.js';


window.addEventListener('load', () => {
  createContainer('div', 'cards-container', '#app');
  createCard('.cards-container');
});