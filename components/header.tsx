import React from "react";

const Header = (props) => {
  return (
    <div>
      <h1 className="bg-primary px-3 text-white display-4 text-right">
        {props.header}
      </h1>
    </div>
  );
};

export default Header;
