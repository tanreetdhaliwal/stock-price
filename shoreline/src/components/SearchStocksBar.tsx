import React from "react";
import Stocks from "./Stocks";
import SearchBar from "./SearchBar";

const stocks = [
  { id: 1, ticker: "AAPL", value: "105.67", name: "Apple", increase: "+24.78" },
  { id: 1, ticker: "TSLA", value: "113.05", name: "Tesla", increase: "-24.78" },
  { id: 1, ticker: "TSLA", value: "113.05", name: "Tesla", increase: "-24.78" },
  { id: 1, ticker: "TSLA", value: "113.05", name: "Tesla", increase: "-24.78" },
  { id: 1, ticker: "TSLA", value: "113.05", name: "Tesla", increase: "-24.78" },
  { id: 1, ticker: "AAPL", value: "105.67", name: "Apple", increase: "+24.78" },
  { id: 1, ticker: "TSLA", value: "113.05", name: "Tesla", increase: "-24.78" },
  { id: 1, ticker: "TSLA", value: "113.05", name: "Tesla", increase: "-24.78" },
  { id: 1, ticker: "TSLA", value: "113.05", name: "Tesla", increase: "-24.78" },
  { id: 1, ticker: "TSLA", value: "113.05", name: "Tesla", increase: "-24.78" },
  { id: 1, ticker: "AAPL", value: "105.67", name: "Apple", increase: "+24.78" },
  { id: 1, ticker: "TSLA", value: "113.05", name: "Tesla", increase: "-24.78" },
  { id: 1, ticker: "TSLA", value: "113.05", name: "Tesla", increase: "-24.78" },
  { id: 1, ticker: "TSLA", value: "113.05", name: "Tesla", increase: "-24.78" },
  { id: 1, ticker: "TSLA", value: "113.05", name: "Tesla", increase: "-24.78" },
];

const SearchStocksBar: React.FunctionComponent = (props) => {
  return (
    <div>
      <SearchBar />
      <Stocks stocks={stocks} />
    </div>
  );
};

export default SearchStocksBar;
