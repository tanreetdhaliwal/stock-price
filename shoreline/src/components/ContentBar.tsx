import React from "react";
import Row from "react-bootstrap/Row";

const ContentBar: React.FunctionComponent = () => {
  return (
    <div>
      <Row className="row-logo mb-5 justify-content-md-center align-items-center">
        <img className="img-logo" src="profit.png"></img>
      </Row>
    </div>
  );
};

export default ContentBar;
