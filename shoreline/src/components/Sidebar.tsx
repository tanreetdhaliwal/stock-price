import React from "react";
import Row from "react-bootstrap/Row";
import Headings from "./Headings";

const headings = [
  { id: 1, value: "My Stocks" },
  { id: 2, value: "Buy Stocks" },
  { id: 3, value: "Pending Orders" },
  { id: 4, value: "Settings" },
  { id: 5, value: "History" },
  { id: 6, value: "Help Center" },
];

const Sidebar: React.FunctionComponent = () => {
  return (
    <div>
      <Row className="row-logo mb-5 justify-content-md-center align-items-center">
        <img className="img-logo" src="profit.png"></img>
      </Row>
      <Headings headings={headings} />
    </div>
  );
};

export default Sidebar;
