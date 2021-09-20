import React from "react";
import Row from "react-bootstrap/Row";
import Heading from "../../models/heading";
import styles from "./Navbar.module.css";

const Headings: React.FC<{ items: Heading[] }> = (props) => {
  return (
    <React.Fragment>
      {props.items.map((item) => {
        return (
          <Row className={styles.row}>
            <div className={`${styles.label} ${item.active && styles.active}`}>
              {item.text}
            </div>
          </Row>
        );
      })}
    </React.Fragment>
  );
};

export default Headings;
