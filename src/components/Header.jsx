import React from "react";

const Header = ({ title, className }) => {
  return (
    <header className={`${className} bg-black text-white`}>
      {title ? title : "default title"}
    </header>
  );
};

export default Header;
