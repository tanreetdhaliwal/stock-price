import React from "react";
import PlotlyChart from "react-plotlyjs-ts";

class Graph extends React.Component<
  { query: any },
  {
    stockChartXValues: any;
    stockChartYValues: any;
    query: string;
  }
> {
  constructor(props: any) {
    super(props);
    this.state = {
      stockChartXValues: [],
      stockChartYValues: [],
      query: this.props.query,
    };
  }

  componentWillMount() {
    this.fetchStock();
  }

  fetchStock() {
    const pointerToThis = this;
    const API_KEY = "Y5JPS4MY4VBLA8FQ";
    let API_Call = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${this.state.query}&outputsize=compact&apikey=${API_KEY}`;
    console.log(API_Call);
    let stockChartXValuesFunction: any = [];
    let stockChartYValuesFunction: any = [];

    fetch(API_Call)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data);

        for (var key in data["Time Series (Daily)"]) {
          stockChartXValuesFunction.push(key);
          stockChartYValuesFunction.push(
            data["Time Series (Daily)"][key]["1. open"]
          );
        }

        pointerToThis.setState({
          stockChartXValues: stockChartXValuesFunction,
          stockChartYValues: stockChartYValuesFunction,
        });
      });
  }

  render() {
    return (
      <div>
        <PlotlyChart
          data={[
            {
              x: this.state.stockChartXValues,
              y: this.state.stockChartYValues,
              type: "scatter",
              mode: "lines+markers",
              marker: { color: "black" },
            },
          ]}
          layout={{
            width: 720,
            height: 440,
            plot_bgcolor: "#dee2e5",
            paper_bgcolor: "#dee2e5",
          }}
        />
      </div>
    );
  }
}

export default Graph;
