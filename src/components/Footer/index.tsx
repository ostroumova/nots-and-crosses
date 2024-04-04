import React from "react";
import "./styles.scss";

type FooterProps = {
  copyrights: string;
  date: string;
};

const Footer: React.FC<FooterProps> = ({ copyrights, date }) => {
  return (
    <footer>
      <p>{copyrights}</p>
      <p>{date}</p>
    </footer>
  );
};

export default Footer;
