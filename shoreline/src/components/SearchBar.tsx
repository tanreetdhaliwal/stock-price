import React, { useState } from "react";
import Row from "react-bootstrap/Row";

const SearchBar: React.FunctionComponent<{
  onUpdateSearchData: (stock: any) => void;
}> = (props) => {
  const [stock, setStock] = useState("");

  const handleStockChange = (e: any) => {
    setStock(e.target.value);
    props.onUpdateSearchData(stock);
  };

  return (
    <Row className="search-bar justify-content-md-center align-items-center">
      <input type="text" onChange={handleStockChange}></input>
    </Row>
  );
};

export default SearchBar;
