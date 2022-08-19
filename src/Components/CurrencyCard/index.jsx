import React from "react";
import PropTypes from "prop-types";

export default function CurrencyCard({ id, symbol, name, image, price }) {
  return (
    <div id={id}>
      <img src={image} alt={name} />
      <h2>{symbol}</h2>
      <p>{price}</p>
    </div>
  );
}

CurrencyCard.propTypes = {
  id: PropTypes.number.isRequired,
  symbol: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
}
