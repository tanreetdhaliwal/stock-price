import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Sidebar from "../components/Navbar/Sidebar";
import SearchStocksBar from "../components/SearchStocksBar";

const Home: React.FunctionComponent = (props) => {
  return (
    <div className="cont">
      <Row>
        <Col className="col col-sidebar" lg={2}>
          <Sidebar />
        </Col>
        <Col className="col col-search" lg={3}>
          <SearchStocksBar />
        </Col>
        <Col lg={9}></Col>
      </Row>
    </div>
  );
};

export default Home;
