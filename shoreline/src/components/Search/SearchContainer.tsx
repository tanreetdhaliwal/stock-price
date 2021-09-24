import { useState } from "react";
import Searchbar from "./Searchbar";
import Row from "react-bootstrap/Row";
import Data from "./Data";
import Stock from "./Stock";

const SearchContainer = () => {
  const [query, setQuery] = useState("");
  const [duration, setDuration] = useState("");
  const [stockData, sendStockData] = useState();
  return (
    <Row className="row-search">
      <Searchbar setDuration={setDuration} setQuery={setQuery} />
      <Stock stockData={stockData} />
      <Data sendStockData={sendStockData} duration={duration} query={query} />
    </Row>
  );
};

export default SearchContainer;
