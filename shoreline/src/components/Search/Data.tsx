import { useEffect, useState } from "react";
import PlotlyChart from "react-plotlyjs-ts";
import Row from "react-bootstrap/Row";
interface DataProps {
  query: string;
  duration: string;
  moveStock: any;
}

const Data = (props: DataProps) => {
  const [x, setXValues] = useState([]);
  const [y, setYValues] = useState([]);

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
    let duration = props.duration.toUpperCase();
    let query = props.query.toUpperCase();
    let API_Call = `https://www.alphavantage.co/query?function=TIME_SERIES_${duration}_ADJUSTED&symbol=${query}&outputsize=compact&apikey=${API_KEY}`;
    let stockChartXValuesFunction: any = [];
    let stockChartYValuesFunction: any = [];
    let volumes: any = [];
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
        let stock: any = {
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
