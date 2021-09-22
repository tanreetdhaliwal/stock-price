import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Sidebar from "../components/Navbar/Sidebar";
import SearchContainer from "../components/Search/SearchContainer";

const Home: React.FunctionComponent = () => {
  return (
    <Container fluid className="cont-home">
      <Row className="row-no-padding">
        <Col className="col-sidebar" lg={2}>
          <Sidebar />
        </Col>
        <Col className="col-search" lg={10}>
          <SearchContainer />
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
