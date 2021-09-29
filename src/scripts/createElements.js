import { fetchToken, URL } from './fetch.js';

function createTag(name, className) {
  const element = document.createElement(name);
  element.className = className;
  return element;
};

export function createContainer(name, className, parentName) {
  if (!name) throw new Error('Cannot be empty');
  const container = createTag(name, className);
  const parent = document.querySelector(parentName);
  parent.appendChild(container);
}

export async function createCard(parentName) {
  const parent = document.querySelector(parentName);
  const tokenPrice = await fetchToken(URL);
  tokenPrice.forEach(e => {
    const { id, symbol, name, image, price } = e;
    const card = createTag('div', 'tokenCard');
    card.id = id;
    const img = createTag('img', 'tokenImg');
    img.src = image;
    img.alt = name;
    const h2 = createTag('h2', 'tokenTitle');
    h2.textContent = symbol;
    const tokenValue = createTag('p', 'tokenValue');
    tokenValue.innerHTML = `<span class="usd">USD</span> ${price}`;
    card.appendChild(img);
    card.appendChild(h2);
    card.appendChild(tokenValue);
    parent.appendChild(card);
  });
  
}
