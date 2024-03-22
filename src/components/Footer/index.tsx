import React from "react";
import "./styles.scss";

type FooterProps = {
  copyrights: string;
  date: string;
};

const Footer: React.FC<FooterProps> = ({ copyrights, date }) => {
  return (
    <footer>
      <h4>{copyrights}</h4>
      <p>{date}</p>
    </footer>
  );
};

export default Footer;
