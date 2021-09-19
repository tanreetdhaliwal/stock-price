import React from "react";
import Stocks from "../components/Stocks";

const stocks = [
  { id: 1, ticker: "AAPL", value: "105.67", name: "Apple", increase: "+24.78" },
  { id: 1, ticker: "FB", value: "113.05", name: "Tesla", increase: "-24.78" },
];

const SearchBar: React.FunctionComponent = (props) => {
  return (
    <div>
      <div className="search-bar">Search for stocks...</div>
      <Stocks stocks={stocks} />
    </div>
  );
};

export default SearchBar;
