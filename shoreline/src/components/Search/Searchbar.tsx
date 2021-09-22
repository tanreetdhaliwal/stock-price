import React, { useRef } from "react";
import Row from "react-bootstrap/Row";

const Searchbar: React.FC = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const changeHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredText = inputRef.current!.value;
    console.log(enteredText);
  };

  return (
    <Row className="row-no-padding align-items-center">
      <form id="search" onSubmit={changeHandler}>
        <input
          className="noSelect search-field"
          type="text"
          id="text"
          ref={inputRef}
        />
        <button className="search-button">Search</button>
      </form>
    </Row>
  );
};

export default Searchbar;
