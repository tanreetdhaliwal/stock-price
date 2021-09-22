import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Stock: React.FunctionComponent = () => {
  const stock = {
    active: true,
    ticker: "APPLE",
    decreasing: "-2.09",
    value: "109.34",
    increase: "56.89",
  };
  return (
    <Row className="stock">
      <Col>
        <Row className="ticker justify-content-md-start">{stock.ticker}</Row>
        <Row className="company justify-content-md-start">{stock.ticker}</Row>
      </Col>
      <Col className="end-col">
        <Row className="value justify-content-md-end">
          <div className={`${stock.decreasing ? "red" : "rectangle"}`}>
            {stock.value}
          </div>
        </Row>
        <Row className="increase justify-content-md-end">{stock.increase}</Row>
      </Col>
    </Row>
  );
};

export default Stock;

/*

<Col>
          <Row className="ticker justify-content-md-start">{stock.ticker}</Row>
          <Row className="company justify-content-md-start">{stock.ticker}</Row>
        </Col>
        <Col className="end-col">
          <Row className="value justify-content-md-end">
            <div className={`${stock.decreasing ? "red" : "rectangle"}`}>
              {stock.value}
            </div>
          </Row>
          <Row className="increase justify-content-md-end">
            {stock.increase}
          </Row>
        </Col>


*/
