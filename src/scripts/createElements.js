import { fetchToken, URL } from './fetch.js';

export const currencies = ['brl', 'usd'];

export function createTag(tagName, className='', idName = '') {
  if (!tagName) throw new Error('Cannot be empty');
  const element = document.createElement(tagName);
  element.className = className;
  element.id = idName;
  return element;
};

export function createChildTag(tagName, parentName, className, idName) {
  if (!tagName) throw new Error('Cannot be empty');
  const htmlElement = createTag(tagName, className,idName);
  const parent = document.querySelector(parentName);
  parent.appendChild(htmlElement);
}

export function createContainer(tagName, className, parentName) {
  if (!tagName) throw new Error('Cannot be empty');
  const container = createTag(tagName, className);
  const parent = document.querySelector(parentName);
  parent.appendChild(container);
}

export async function createCard(parentName) {
  const parent = document.querySelector(parentName);
  const tokenPrice = await fetchToken(URL);
  tokenPrice.forEach(e => {
    const { id, symbol, name, image, price } = e;
    const card = createTag('div', 'tokenCard', id);
    const img = createTag('img', 'tokenImg');
    img.src = image;
    img.alt = name;
    const h2 = createTag('h2', 'tokenTitle');
    h2.textContent = symbol;
    const tokenValue = createTag('p', 'tokenValue');
    tokenValue.innerHTML = `<span class="currencyType">USD</span> ${price}`;
    card.appendChild(img);
    card.appendChild(h2);
    card.appendChild(tokenValue);
    parent.appendChild(card);
  });
  
}
