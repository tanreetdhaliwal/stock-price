import React from "react";
import Row from "react-bootstrap/Row";
import styles from "./Sidebar.module.css";

interface Heading {
  id: string;
  text: string;
  active: boolean;
}

interface HeadingProps {
  headingLabels: Heading[];
}

const Headings = ({ headingLabels }: HeadingProps) => {
  return (
    <React.Fragment>
      {headingLabels.map((heading) => {
        return (
          <Row className={styles.rows}>
            <div
              className={`${styles.label} ${heading.active && styles.active}`}
            >
              {heading.text}
            </div>
          </Row>
        );
      })}
    </React.Fragment>
  );
};

export default Headings;
