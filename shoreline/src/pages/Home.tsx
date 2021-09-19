import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Header from "../components/Header";
import SearchBar from "../components/SearchBar";

const Home: React.FunctionComponent = (props) => {
  return (
    <div className="cont">
      <Row>
        <Col className="header" lg={2}>
          <Header name="Tanreet" />
        </Col>
        <Col className="search" lg={3}>
          <SearchBar />
        </Col>
        <Col lg={9}></Col>
      </Row>
    </div>
  );
};

export default Home;
