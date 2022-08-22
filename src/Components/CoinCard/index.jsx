import React from "react";
import PropTypes from "prop-types";

export default function CoinCard({ id, symbol, name, image, price, high24, low24 }) {
  return (
    <div id={id}>
      <div>
        <img src={image} alt={name} />
        <h2>{symbol}</h2>
        <p>{price}</p>
      </div>
      <div>
        <span>{high24}</span>
        <span>{low24}</span>
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
