import { createCard, createContainer, createTag, createChildTag, currencies } from './createElements.js';

function clock(clockTag, calendarTag) {
  const data = new Date();
  const h = data.getHours() < 10 ? `0${data.getHours()}`: data.getHours();
  const m = data.getMinutes() < 10 ? `0${data.getMinutes()}`: data.getMinutes();
  const s = data.getSeconds() < 10 ? `0${data.getSeconds()}`: data.getSeconds();
  const time = `${h}:${m}:${s}`;
  const date = `${data.getDate()}/${data.getMonth()+1}/${data.getFullYear()}`;
  clockTag.textContent = time;
  calendarTag.textContent = date;
}

function createOptions() {
  createContainer('session', 'cards-options', '#app');
  //
  // Currency Selection
  createContainer('div', 'options currencySelector', '.cards-options');
  createChildTag('select', '.currencySelector', '', 'currency');
  currencies.forEach(e => { 
    if (e === 'usd') {
      createChildTag('option', '#currency', 'currency-item', e);
      const usd = document.getElementById(e);
        usd.setAttribute('selected','true');
        usd.value = e;
        usd.textContent = e;
        
    } else {
      createChildTag('option', '#currency', 'currency-item', e);
      const item = document.getElementById(e);
        item.value = e;
        item.textContent = e;
    }
   });

   //Search bar  
  createContainer('div', 'options search-bar', '.cards-options');
  createChildTag('input', '.search-bar','', 'search-input');
   document.getElementById('search-input').setAttribute('placeholder', 'Search...');

  //Clock
  createContainer('div', 'options date', '.cards-options');
  createChildTag('span','.date','','clock');
  createChildTag('span','.date','','calendar');
  

  setInterval( () => {
    clock((document.getElementById('clock')), (document.getElementById('calendar')));
  }, 1000);
}

function page() {
  //options area
  createOptions();
  
  //coin cards, coin list and currency converter
  createContainer('session', 'cards-content', '#app')
  createContainer('div', 'cards-container', '.cards-content');
  createCard('.cards-container');
  createContainer('div', 'coin-list', '.cards-content');
}

window.addEventListener('load', () => {
  page();
  
});
