import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Stock = (props: any) => {
  console.log(props);
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
            {props.price}
          </div>
        </Row>
      </Col>
    </Row>
  );
};

export default Stock;
