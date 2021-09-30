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
  let lastSelected = '';
  document.getElementById('currency')
    .addEventListener('mouseenter', (evt) => {
      const { selectedOptions } = evt.target;
      lastSelected = selectedOptions['0'].id;
      //console.log(selectedOptions['0']);
    });
  document.getElementById('currency')
    .addEventListener('change', (evt) => {
      updateCardsPrice(evt.target.value, lastSelected);
    });
}

window.addEventListener('load', () => {
  page();
});
