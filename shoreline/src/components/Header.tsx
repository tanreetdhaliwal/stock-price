import React from "react";

interface WelcomeProps {
  name: string;
}

const Header: React.FunctionComponent<WelcomeProps> = (props) => {
  return (
    <div>
      <h1>Hello, {props.name}</h1>
    </div>
  );
};

export default Header;
