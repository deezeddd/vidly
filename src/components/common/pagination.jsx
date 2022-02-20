import React, { Component } from "react";
//maybe no local state toh isliye sfc use
//whenever you want to build a reusable compnent you should always think about the interface of the components what are the inputs thet compnents is gonna recieve what are the vents its gonnna raise
//the best wAY TO DECIDE THE INTERFACE OF THE COMP IS TO USE IT BEFORE IMPLEMENTING
const Pagination = (props) => {
  return (
    <nav>
      <ul className="pagination">
        <li className="page-item">
          <a className="page-link">1</a>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
