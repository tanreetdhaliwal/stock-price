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
          <Row className="headings">
            <Col>
              <Row>{stock.ticker}</Row>
              <Row>{stock.name}</Row>
            </Col>
            <Col>
              <Row>{stock.value}</Row>
              <Row>{stock.increase}</Row>
            </Col>
          </Row>
        );
      })}
    </div>
  );
};

export default Stocks;
