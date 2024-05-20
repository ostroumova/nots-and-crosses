import React from "react";
import "./styles.scss";

type FooterProps = {
  copyright: string;
  date: string;
};

const Footer: React.FC<FooterProps> = ({ copyright, date }) => {
  return (
    <footer>
      <p>{copyright}</p>
      <p>{date}</p>
    </footer>
  );
};

export default Footer;
