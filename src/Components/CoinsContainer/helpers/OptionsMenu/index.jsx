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

  const onchangeItemsPerPage = ({ target }) => {
    setItemsQuantity(target.value);
  }

  return (
    <section>
      <div>
        <label htmlFor="coinsContainer-order-by">
          Order By:
          <select id="coinsContainer-order-by" onChange={onChangeOrderByHandler}>
            <option value="market_cap_asc">Market Cap Ascending</option>
            <option value="market_cap_desc">Market Cap Descending</option>
            <option value="volume_asc">Volume Ascending</option>
            <option value="volume_desc">Volume Descending</option>
          </select>
        </label>
      </div>

      <div>
        <label htmlFor="coinsContainer-items-by-page">
          Assets per Page:
          <select id="coinsContainer-items-by-page" onChange={onchangeItemsPerPage}>
            <option value="10">10</option>
            <option value="25">25</option>
            <option value="35">35</option>
            <option value="50">50</option>
          </select>
        </label>
      </div>

      <div>
        <span onChange={ () => setPageNumber("minus") }>&#60;</span>
        <span>{pageNumber}</span>
        <span onChange={ () => setPageNumber("plus") }>&#62;</span>
      </div>
    </section>
  );
}