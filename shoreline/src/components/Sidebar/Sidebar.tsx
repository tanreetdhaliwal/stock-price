import React from "react";
import Row from "react-bootstrap/Row";
import Headings from "./Headings";
import styles from "./Sidebar.module.css";

interface Heading {
  id: string;
  text: string;
  active: boolean;
}

interface Headings extends Array<Heading> {}

const headings: Headings = [
  { id: "1", text: "My Stocks", active: true },
  { id: "2", text: "Buy Stocks", active: false },
  { id: "3", text: "Pending Orders", active: false },
  { id: "4", text: "Settings", active: false },
  { id: "5", text: "History", active: false },
  { id: "6", text: "Help Center", active: false },
];

const Sidebar = () => {
  return (
    <React.Fragment>
      <Row
        className={`mb-5 justify-content-md-center align-items-center ${styles.logo}`}
      >
        <img className={styles.img} src="profit.png"></img>
      </Row>
      <Headings headingLabels={headings} />
    </React.Fragment>
  );
};

export default Sidebar;
