import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Headings from "../components/Headings";
interface WelcomeProps {
  name: string;
}

const headings = [
  { id: 1, value: "My Stocks" },
  { id: 2, value: "Buy Stocks" },
  { id: 3, value: "Pending Orders" },
  { id: 4, value: "Settings" },
  { id: 5, value: "History" },
  { id: 6, value: "Help Center" },
];

const Header: React.FunctionComponent<WelcomeProps> = (props) => {
  return (
    <div>
      <Row className="logo">
        <img className="img-logo" src="profit.png"></img>
      </Row>
      <Headings headings={headings} />
    </div>
  );
};

export default Header;
