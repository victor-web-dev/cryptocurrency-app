import React, { useEffect, useState, useContext } from "react";
import CurrencyContext from "../../Context/CurrencyContext";
import CoinCard from "./CoinCard";
import OptionsMenu from "./helpers/OptionsMenu";

export default function CoinsContainer() {
  const [coin, setCoin] = useState([]);
  const { currency } = useContext(CurrencyContext);
  const [order, setOrder] = useState('market_cap_asc');
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);

  const changePageHandler = (action) => {
    let currentPage = page;
    if (action === "plus") {
      currentPage += 1;
      setPage(currentPage);
    }
    if (action === "minus" && currentPage > 1) {
      currentPage -= 1;
      setPage(currentPage);
    }
  }

  useEffect(() => {
    const fetchCoins = async () => {
      try {
        const api = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=${order}&per_page=${itemsPerPage}&page=${page}&sparkline=false`;
        const data = await fetch(api);
        const json = await data.json();
        setCoin(json);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    }
    fetchCoins()
  }, [currency, order, itemsPerPage, page]);

  return (
    <section>
      <OptionsMenu
        setOrderBy={setOrder}
        setItemsQuantity={setItemsPerPage}
        pageNumber={page}
        setPageNumber={changePageHandler}
      />
      {
        !loading ? (
          <h2>Loading...</h2>
        ) : (
          coin.map((coin) => {
            const { id, symbol, name, image, current_price, high_24, low_24 } = coin;
            return (
            <CoinCard
              key={id}
              id={id}
              symbol={symbol}
              name={name}
              image={image}
              price={current_price}
              high24={high_24}
              low24={low_24}
            />
            )
          })
        )
      }
    </section>
  );
}
