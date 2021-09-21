import React from "react";
import StocksList from "./StocksList";
import SearchBar from "./SearchBar";
import Row from "react-bootstrap/Row";

const stocks: any = [
  {
    id: 1,
    ticker: "AAPL",
    value: "105.67",
    name: "Apple",
    increase: "+24.78",
    active: false,
    decreasing: false,
  },
  {
    id: 1,
    ticker: "TSLA",
    value: "113.05",
    name: "Tesla",
    increase: "-24.78",
    active: true,
    decreasing: false,
  },
  {
    id: 1,
    ticker: "TSLA",
    value: "113.05",
    name: "Tesla",
    increase: "-24.78",
    active: false,
    decreasing: true,
  },
  {
    id: 1,
    ticker: "TSLA",
    value: "113.05",
    name: "Tesla",
    increase: "-24.78",
    active: false,
    decreasing: false,
  },
  {
    id: 1,
    ticker: "AAPL",
    value: "105.67",
    name: "Apple",
    increase: "+24.78",
    active: false,
    decreasing: true,
  },
  {
    id: 1,
    ticker: "TSLA",
    value: "113.05",
    name: "Tesla",
    increase: "-24.78",
    active: false,
    decreasing: true,
  },
  {
    id: 1,
    ticker: "TSLA",
    value: "113.05",
    name: "Tesla",
    increase: "-24.78",
    active: false,
    decreasing: false,
  },
  {
    id: 1,
    ticker: "TSLA",
    value: "113.05",
    name: "Tesla",
    increase: "-24.78",
    active: false,
    decreasing: false,
  },
  {
    id: 1,
    ticker: "AAPL",
    value: "105.67",
    name: "Apple",
    increase: "+24.78",
    active: false,
    decreasing: false,
  },
  {
    id: 1,
    ticker: "TSLA",
    value: "113.05",
    name: "Tesla",
    increase: "-24.78",
    active: false,
    decreasing: false,
  },
  {
    id: 1,
    ticker: "TSLA",
    value: "113.05",
    name: "Tesla",
    increase: "-24.78",
    active: false,
    decreasing: true,
  },
  {
    id: 1,
    ticker: "TSLA",
    value: "113.05",
    name: "Tesla",
    increase: "-24.78",
    active: false,
    decreasing: true,
  },
  {
    id: 1,
    ticker: "AAPL",
    value: "105.67",
    name: "Apple",
    increase: "+24.78",
    active: false,
    decreasing: true,
  },
  {
    id: 1,
    ticker: "TSLA",
    value: "113.05",
    name: "Tesla",
    increase: "-24.78",
    active: false,
    decreasing: true,
  },
  {
    id: 1,
    ticker: "TSLA",
    value: "113.05",
    name: "Tesla",
    increase: "-24.78",
    active: false,
    decreasing: true,
  },
  {
    id: 1,
    ticker: "TSLA",
    value: "113.05",
    name: "Tesla",
    increase: "-24.78",
    active: false,
    decreasing: true,
  },
  {
    id: 1,
    ticker: "TSLA",
    value: "1134.05",
    name: "Tesla",
    increase: "-24.78",
    active: false,
    decreasing: true,
  },
  {
    id: 1,
    ticker: "TANREET",
    value: "113.05",
    name: "Tesla",
    increase: "-24.78",
    active: false,
    decreasing: true,
  },
];
const saveSearchDataHandler = (stock: any) => {
  const searchData = {
    ...stock,
  };
  console.log(searchData);
};
const SearchStocksBar: React.FunctionComponent = () => {
  return (
    <div>
      <SearchBar onUpdateSearchData={saveSearchDataHandler} />
      <StocksList stocks={stocks} />
    </div>
  );
};

export default SearchStocksBar;
