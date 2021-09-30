import { createCard, createContainer, createTag, createChildTag, currencies } from './createElements.js';
import { createOptions } from './page-header-options.js';
import { updateCardsPrice } from './fetch.js';

function page() {
  //options area
  createOptions();
  
  //coin cards, coin list and currency converter
  createContainer('session', 'cards-content', '#app')
  createContainer('div', 'cards-container', '.cards-content');
  createCard('.cards-container');
  createContainer('div', 'coin-list', '.cards-content');

  //events
  let lastSelected = 'usd';
  let currentValue = 'usd';
  
  document.getElementById('currency')
    .addEventListener('mouseenter', (evt) => {
      const { selectedOptions } = evt.target;
      lastSelected = selectedOptions['0'].id;
    });
  document.getElementById('currency')
    .addEventListener('change', (evt) => {
     currentValue = evt.target.value;
     updateCardsPrice(currentValue, lastSelected);
    });

    setInterval(() => {
      updateCardsPrice(currentValue, lastSelected);
    }, 10000);
}

window.addEventListener('load', () => {
  page();
});
