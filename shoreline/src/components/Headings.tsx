import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

interface Heading {
  id: number;
  value: string;
}

interface HeadingProps {
  headings: Heading[];
}

const Headings: React.FunctionComponent<HeadingProps> = (props) => {
  return (
    <div>
      {props.headings.map((heading) => {
        return (
          <Row className="row-heading mb-4">
            <div>{heading.value}</div>
          </Row>
        );
      })}
    </div>
  );
};

export default Headings;
