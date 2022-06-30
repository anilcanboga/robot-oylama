import React from "react";

function Header({ title }) {
  return <div className="title">{title ? title : "Ayın Robot Elemanı"}</div>;
}

export default Header;
