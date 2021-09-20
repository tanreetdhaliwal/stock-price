import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

interface Stock {
  id: number;
  ticker: string;
  value: string;
  name: string;
  increase: string;
}

interface StockProps {
  stocks: Stock[];
}

const Stocks: React.FunctionComponent<StockProps> = (props) => {
  return (
    <div>
      {props.stocks.map((stock) => {
        return (
          <Row className="mb-4 mt-5">
            <Col className="col">
              <Row className="row-stock justify-content-md-start">
                {stock.ticker}
              </Row>
              <Row className="row-stock justify-content-md-start">
                {stock.name}
              </Row>
            </Col>
            <Col>
              <Row className="row-price justify-content-md-end">
                {stock.value}
              </Row>
              <Row className="row-price justify-content-md-end">
                {stock.increase}
              </Row>
            </Col>
          </Row>
        );
      })}
    </div>
  );
};

export default Stocks;
