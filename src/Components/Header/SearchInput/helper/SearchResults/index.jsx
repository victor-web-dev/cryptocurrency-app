import React from 'react';
import Proptypes from 'prop-types';

export default function SearchResult({ results }) {
  return (
    <div className='header-search-result'>
        <ul>
          {
            results.map((coin) => {
              // href will be fixed after making the corresponding page
              return (
                <li key={coin.id}>
                  <a href="/home">
                    <img src={coin.thumb} alt={coin.api_symbol} />
                    <span>{coin.name}</span>
                  </a>
                </li>
                
              );
            })
          }
        </ul>
    </div>
  );
}

SearchResult.propTypes = {
  results: Proptypes.arrayOf(Proptypes.shape({
    id: Proptypes.string,
    name: Proptypes.string,
    api_symbol: Proptypes.string,
    symbol: Proptypes.string,
    market_cap_rank: Proptypes.number || null,
    thumb: Proptypes.string,
    large: Proptypes.string,
  })).isRequired,
}
