import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

interface Stock {
  id: number;
  ticker: string;
  value: string;
  name: string;
  increase: string;
  active: boolean;
  decreasing: boolean;
}

interface StockProps {
  stocks: Stock[];
}

const StocksList: React.FunctionComponent<StockProps> = (props) => {
  return (
    <React.Fragment>
      <ul>
        {props.stocks.map((stock) => {
          return (
            <li>
              <button className={`${stock.active ? "activestock" : "stock"}`}>
                <Row>
                  <Col>
                    <Row className="ticker justify-content-md-start">
                      {stock.ticker}
                    </Row>
                    <Row className="company justify-content-md-start">
                      {stock.name}
                    </Row>
                  </Col>
                  <Col className="end-col">
                    <Row className="value justify-content-md-end">
                      <div
                        className={`${stock.decreasing ? "red" : "rectangle"}`}
                      >
                        {stock.value}
                      </div>
                    </Row>
                    <Row className="increase justify-content-md-end">
                      {stock.increase}
                    </Row>
                  </Col>
                </Row>
              </button>
            </li>
          );
        })}
      </ul>
    </React.Fragment>
  );
};

export default StocksList;
