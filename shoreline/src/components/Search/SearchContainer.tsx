import React, { useRef, useState } from "react";
import Searchbar from "./Searchbar";
import Stock from "./Stock";
import Row from "react-bootstrap/Row";
import { Container } from "react-bootstrap";
import Data from "./Data";

const SearchContainer: React.FunctionComponent = () => {
  const [search, setSearch] = useState("");
  const [data, setData] = useState({});
  return (
    <Row className="row-search">
      <Searchbar sendQueryData={setSearch} />
      <Stock props={data} />
      <Data moveStock={setData} query={search} />
    </Row>
  );
};

export default SearchContainer;
