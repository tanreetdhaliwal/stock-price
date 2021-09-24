import { useState, Dispatch, SetStateAction } from "react";
import Searchbar from "./Searchbar";
import Stock from "./Stock";
import Row from "react-bootstrap/Row";
import Data from "./Data";

const SearchContainer = () => {
  const [query, setQuery] = useState("");
  const [duration, setDuration] = useState("");
  const [data, setData] = useState();

  return (
    <Row className="row-search">
      <Searchbar setDuration={setDuration} setQuery={setQuery} />
      <Data moveStock={setData} duration={duration} query={query} />
    </Row>
  );
};

export default SearchContainer;
