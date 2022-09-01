export async function search(query) {
  const url = `https://api.coingecko.com/api/v3/search?query=${query}`

  try {
    const data = await fetch(url);
    const { coins } = await data.json();
    return coins;
  } catch (error) {
    console.log(error);
  }
}

/* 
  output example
  "coins": [
    {
      "id": "bitcoin",
      "name": "Bitcoin",
      "api_symbol": "bitcoin",
      "symbol": "BTC",
      "market_cap_rank": 1,
      "thumb": "https://assets.coingecko.com/coins/images/1/thumb/bitcoin.png",
      "large": "https://assets.coingecko.com/coins/images/1/large/bitcoin.png"
    },
  ]
*/