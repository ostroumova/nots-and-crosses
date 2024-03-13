import React from "react";
import "./styles.scss";

type HeaderProps = {
  title: string;
  subtitle: string;
};

const Header: React.FC<HeaderProps> = ({
  title = "Noughts And Crosses",
  subtitle = "Use your brain",
}) => {
  return (
    <header>
      <h1>{title}</h1>
      <h3>{subtitle}</h3>
    </header>
  );
};

export default Header;
