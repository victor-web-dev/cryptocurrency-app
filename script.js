// const app = document.getElementById('app');
const URL = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=plant-vs-undead-token%2Ccryptocars%2Cpolychain-monsters%2Cbinancecoin%2Cetheremontoken%2Cbitcoin%2Cethereum%2Cwanaka-farm%2Cstar-atlas%2Cstar-atlas-dao%2Csolana%2Cbinance-usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=24h%2C7d';

/* 
'https://api.coingecko.com/api/v3/simple/price?ids=plant-vs-undead-token&vs_currencies=brl%2Cusd'
*/

async function fetchToken(URL) {
  const data = await fetch(URL, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  });
  const json = await data.json();
  const tokens = json.map((e) => {
    const {symbol, name, image, current_price:price} = e;
    return {
      symbol,
      name,
      image,
      price
    }
  });

  return tokens;
}

function createTag(name, className) {
  const element = document.createElement(name);
  element.className = className;
  return element;
};

function createContainer(name, className, parentName) {
  if (!name) throw new Error('Cannot be empty');
  const container = createTag(name, className);
  const parent = document.querySelector(parentName);
  parent.appendChild(container);
}

async function createCard(parentName) {
  const parent = document.querySelector(parentName);
  const tokenPrice = await fetchToken(URL);
  tokenPrice.forEach(e => {
    const {symbol, name, image, price} = e;
    const card = createTag('div', 'tokenCard');
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

window.addEventListener('load', () => {
  createContainer('div', 'cards-container', '#app');
  createCard('.cards-container');
});