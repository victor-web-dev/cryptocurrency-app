export const URL = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=plant-vs-undead-token%2Ccryptocars%2Cpolychain-monsters%2Cbinancecoin%2Cetheremontoken%2Cbitcoin%2Cethereum%2Cwanaka-farm%2Cstar-atlas%2Cstar-atlas-dao%2Csolana%2Cbinance-usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=24h%2C7d';

/* 
'https://api.coingecko.com/api/v3/simple/price?ids=plant-vs-undead-token&vs_currencies=brl%2Cusd'
*/

export async function fetchToken(URL) {
  const data = await fetch(URL, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  });
  const json = await data.json();
  const tokens = json.map((e) => {
    const {id, symbol, name, image, current_price:price} = e;
    return {
      id,
      symbol,
      name,
      image,
      price
    }
  });

  return tokens;
}
