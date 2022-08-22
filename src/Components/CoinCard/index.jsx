import React, {useContext} from "react";
import PropTypes from "prop-types";
import CurrencyContext from "../../Context/CurrencyContext";

export default function CoinCard({ id, symbol, name, image, price, high24, low24 }) {
  const { currency } = useContext(CurrencyContext);
  return (
    <div id={id}>
      <div>
        <img src={image} alt={name} />
        <h2>{name}</h2>
        <h4>{symbol}</h4>
        <p>
          <span>{currency}</span>
          {price}
        </p>
      </div>
      <div>
        <label htmlFor="">
          24h High:
          <span>{high24 ? high24 : '00.00'}</span>
        </label>
        <label htmlFor="">
          24h Low:
          <span>{low24 ? low24 : '00.00'}</span>
        </label>
      </div>
    </div>
    
  );
}

CoinCard.propTypes = {
  id: PropTypes.string.isRequired,
  symbol: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  high24: PropTypes.number.isRequired,
  low24: PropTypes.number.isRequired,
}
