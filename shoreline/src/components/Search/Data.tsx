import { useEffect, useState, Dispatch, SetStateAction } from "react";
import PlotlyChart from "react-plotlyjs-ts";
import Row from "react-bootstrap/Row";

interface Stock {
  ticker: string;
  price: string;
  increase: boolean;
}
interface DataProps {
  query: string;
  duration: string;
  sendStockData: Dispatch<SetStateAction<any>>;
}

const Data = (props: DataProps) => {
  const [stockData, setStockData] = useState({});

  const [x, setXValues] = useState([]);
  const [y, setYValues] = useState([]);
  let duration = props.duration.toUpperCase();
  let query = props.query.toUpperCase();
  useEffect(() => {
    const API_KEY = "7JAII2Q8BLNVCEXT";
    let dataTitle = "Time Series (Daily)";
    switch (props.duration) {
      case "Daily":
        dataTitle = "Time Series (Daily)";
        break;
      case "Weekly":
        dataTitle = "Weekly Adjusted Time Series";
        break;
      case "Monthly":
        dataTitle = "Monthly Adjusted Time Series";
        break;
      default:
        dataTitle = "Time Series (Daily)";
    }
    let API_Call = `https://www.alphavantage.co/query?function=TIME_SERIES_${duration}_ADJUSTED&symbol=${query}&outputsize=compact&apikey=${API_KEY}`;
    let stockChartXValuesFunction: any = [];
    let stockChartYValuesFunction: any = [];
    fetch(API_Call)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(dataTitle);
        for (var key in data[dataTitle]) {
          stockChartXValuesFunction.push(key);
          stockChartYValuesFunction.push(data[dataTitle][key]["1. open"]);
        }
        setXValues(stockChartXValuesFunction);
        setYValues(stockChartYValuesFunction);
        let stock: Stock = {
          ticker: props.query,
          price: stockChartYValuesFunction[0],
          increase:
            stockChartYValuesFunction[0] < stockChartYValuesFunction[1]
              ? false
              : true,
        };
        setStockData(stock);
        props.sendStockData(stock);
      });
  }, [props.query, props.duration]);

  return (
    <Row className="justify-content-md-center">
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
          autosize: true,
          plot_bgcolor: "#dee2e5",
          paper_bgcolor: "#dee2e5",
        }}
      />
    </Row>
  );
};

export default Data;
