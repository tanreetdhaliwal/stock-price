import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Header from "../components/Header";

const Home: React.FunctionComponent = (props) => {
  return (
    <div className="cont">
      <Row>
        <Col lg={1}>
          <Header name="tanreet" />
        </Col>
        <Col lg={4}>
          <Header name="tanreet" />
        </Col>
        <Col lg={7}>
          <Header name="tanreet" />
        </Col>
      </Row>
    </div>
  );
};

export default Home;
