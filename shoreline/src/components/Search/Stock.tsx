import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

interface Stock {
  ticker: string;
  price: any;
  volume: string;
  increase: boolean;
}

const Stock = (props: any) => {
  return (
    <Row className="stock">
      <Col>
        <Row className="ticker justify-content-md-start">
          {props.props.ticker}
        </Row>
      </Col>
      <Col className="end-col">
        <Row className="value justify-content-md-end">
          <div className={`${props.props.increase ? "rectangle" : "red"}`}>
            {props.props.price}
          </div>
        </Row>
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
