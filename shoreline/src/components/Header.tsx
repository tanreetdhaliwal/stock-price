import React from "react";
import { Container } from "react-bootstrap";

interface WelcomeProps {
  name: string;
}

const Header: React.FunctionComponent<WelcomeProps> = (props) => {
  return (
    <Container>
      <h1>Hello, {props.name}</h1>
    </Container>
  );
};

export default Header;
