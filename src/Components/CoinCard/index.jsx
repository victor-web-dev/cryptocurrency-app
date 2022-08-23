import React, {useContext} from "react";
import PropTypes from "prop-types";
import CurrencyContext from "../../Context/CurrencyContext";
import "./style.css";

export default function CoinCard({ id, symbol, name, image, price, high24, low24 }) {
  const { currency } = useContext(CurrencyContext);
  const editName = `${name.slice(0, 25)}...`;

  return (
    <div id={id} className="coinCard-container">
      <div className="coinCard-container-image">
          <img src={image} alt={name} />
      </div>
      <div className="coinCard-container-data">
          <span>
            <h2>{name.length > 25 ? editName : name}</h2>
            <h4>{symbol}</h4>
          </span>
          
          <p>
            <span>{currency}</span>
            {price.toFixed(5)}
          </p>
          
          <div>
            <label>
              24h High:
              <span>{high24 ? high24 : '00.00'}</span>
            </label>
            <label>
              24h Low:
              <span>{low24 ? low24 : '00.00'}</span>
            </label>
          </div>
          
      </div>
    </div>
    
  );
}

CoinCard.propTypes = {
  id: PropTypes.string.isRequired,
  symbol: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  high24: PropTypes.number,
  low24: PropTypes.number,
}
