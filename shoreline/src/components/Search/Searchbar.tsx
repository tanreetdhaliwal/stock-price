import React, { useRef, useState } from "react";
import Row from "react-bootstrap/Row";

interface SearchProps {
  sendQueryData: any;
}

const Searchbar = (props: SearchProps) => {
  const [query, setQuery] = useState("");

  const handleChange = (event: any) => {
    setQuery(event.target.value);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    props.sendQueryData(query);
  };

  return (
    <Row className="row-no-padding justify-content-md-center">
      <form onSubmit={handleSubmit} id="search">
        <input
          onChange={handleChange}
          className="noSelect search-field"
          type="text"
          id="text"
        />
        <button type="submit" className="search-button">
          Search
        </button>
      </form>
    </Row>
  );
};

export default Searchbar;
