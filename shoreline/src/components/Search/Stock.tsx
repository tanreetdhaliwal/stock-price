import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styles from "./Search.module.css";

const Stock = (props: any) => {
  console.log(props);
  if (props.stockData.price == undefined) {
    return <Row className={styles.stock}></Row>;
  } else {
    return (
      <Row className={styles.stock}>
        <Col>
          <Row className={`justify-content-md-start ${styles.label}`}>
            {props.stockData.ticker}
          </Row>
        </Col>
        <Col>
          <Row className={`justify-content-md-end ${styles.value}`}>
            <div
              className={`${
                `${props.stockData.increase}`
                  ? `${styles.positive}`
                  : `${styles.negative}`
              }`}
            >
              {props.stockData.price}
            </div>
          </Row>
        </Col>
      </Row>
    );
  }
};

export default Stock;
