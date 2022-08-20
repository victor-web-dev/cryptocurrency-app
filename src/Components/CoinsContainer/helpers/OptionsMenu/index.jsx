import React from "react";
import PropTypes from "prop-types";

export default function OptionsMenu(props) {
  const {
    setOrderBy,
    setItemsQuantity,
    pageNumber,
    setPageNumber,
  } = props;

  const onChangeOrderByHandler = ({target}) => {
    setOrderBy(target.value);
  }

  return (
    <section>
        <label htmlFor="coinsContainer-order-by">
          Order By:
          <select id="coinsContainer-order-by" onChange={onChangeOrderByHandler}>
            <option value="market_cap_asc">Market Cap Ascending</option>
            <option value="market_cap_desc">Market Cap Descending</option>
            <option value="volume_asc">Volume Ascending</option>
            <option value="volume_desc">Volume Descending</option>
          </select>
        </label>
      </section>
  );
}