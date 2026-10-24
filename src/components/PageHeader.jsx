import React from "react";

const PageHeader = ({ title, intro }) => {
  return (
    <header>
      <h1 className="page-title">{title}</h1>
      {intro && <p className="page-intro">{intro}</p>}
    </header>
  );
};

export default PageHeader;
