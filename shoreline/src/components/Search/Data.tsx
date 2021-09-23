import React, { useEffect, useState } from "react";
import PlotlyChart from "react-plotlyjs-ts";
import Row from "react-bootstrap/Row";

interface DataProps {
  query: string;
  moveStock: any;
}

interface Stock {
  ticker: string;
  price: any;
  volume: string;
  increase: boolean;
}

const Data = (props: DataProps) => {
  const [x, setXValues] = useState([]);
  const [y, setYValues] = useState([]);

  useEffect(() => {
    const API_KEY = "7JAII2Q8BLNVCEXT";
    let API_Call = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${props.query}&outputsize=compact&apikey=${API_KEY}`;
    let stockChartXValuesFunction: any = [];
    let stockChartYValuesFunction: any = [];
    let volumes: any = [];

    fetch(API_Call)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        for (var key in data["Time Series (Daily)"]) {
          stockChartXValuesFunction.push(key);
          stockChartYValuesFunction.push(
            data["Time Series (Daily)"][key]["1. open"]
          );
        }
        setXValues(stockChartXValuesFunction);
        setYValues(stockChartYValuesFunction);
        let stock: Stock = {
          ticker: props.query,
          price: stockChartYValuesFunction[0],
          volume: volumes[0],
          increase:
            stockChartYValuesFunction[0] < stockChartYValuesFunction[1]
              ? false
              : true,
        };
        props.moveStock(stock);
      });
  }, [props.query]);

  return (
    <Row className="graphRow justify-content-md-center">
      <PlotlyChart
        data={[
          {
            x: x,
            y: y,
            type: "scatter",
            mode: "lines+markers",
            marker: { color: "black" },
          },
        ]}
        layout={{
          width: 1100,
          height: 700,
          plot_bgcolor: "#dee2e5",
          paper_bgcolor: "#dee2e5",
        }}
      />
    </Row>
  );
};

export default Data;
function obj(obj: any) {
  throw new Error("Function not implemented.");
}
