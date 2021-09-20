import React from "react";
import Row from "react-bootstrap/Row";
import Headings from "./Headings";
import Heading from "../../models/heading";
import styles from "./Navbar.module.css";

const headings: Heading[] = [
  { id: "1", text: "My Stocks", active: true },
  { id: "2", text: "Buy Stocks", active: false },
  { id: "3", text: "Pending Orders", active: false },
  { id: "4", text: "Settings", active: false },
  { id: "5", text: "History", active: false },
  { id: "6", text: "Help Center", active: false },
];

const Sidebar: React.FC = () => {
  return (
    <React.Fragment>
      <Row
        className={`mb-5 justify-content-md-center align-items-center ${styles.logo}`}
      >
        <img className={styles.img} src="profit.png"></img>
      </Row>
      <Headings items={headings} />
    </React.Fragment>
  );
};

export default Sidebar;
