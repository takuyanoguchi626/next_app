import React from "react";

const Footer = (props) => {
  return (
    <div className="text-center h6 my-4">
      <div>{props.footer}</div>
    </div>
  );
};

export default Footer;
