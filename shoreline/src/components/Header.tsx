import React from "react";

interface WelcomeProps {
  name: string;
}

const Header: React.FunctionComponent<WelcomeProps> = (props) => {
  return (
    <div>
      <p>{props.name}</p>
    </div>
  );
};

export default Header;
