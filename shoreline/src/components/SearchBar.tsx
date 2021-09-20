import React from "react";
import Row from "react-bootstrap/Row";

const SearchBar: React.FunctionComponent = (props) => {
  return (
    <Row className="search-bar justify-content-md-center align-items-center">
      Search by stock or market name
    </Row>
  );
};

export default SearchBar;
