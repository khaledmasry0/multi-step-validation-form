import React from "react";
import { NavLink } from "react-router-dom";

const SideBar = () => {
  return (
    <aside>
      <div className="layout"></div>
      <NavLink to="/">
        <div className="row">
          <span className="active">1</span>
          <div className="row-content">
            <p>STEP 1</p>
            <h1>YOUR INFO</h1>
          </div>
        </div>
      </NavLink>
      <NavLink to="/selectplan">
        <div className="row">
          <span>2</span>
          <div className="row-content">
            <p>STEP 2</p>
            <h1>SELECT PLAN</h1>
          </div>
        </div>
      </NavLink>
      <NavLink to="/addons">
        <div className="row">
          <span>3</span>
          <div className="row-content">
            <p>STEP 3</p>
            <h1>ADD-ONS</h1>
          </div>
        </div>
      </NavLink>
      <NavLink to="/summary">
        <div className="row">
          <span>4</span>
          <div className="row-content">
            <p>STEP 4</p>
            <h1>SUMMARY</h1>
          </div>
        </div>
      </NavLink>
    </aside>
  );
};

export default SideBar;
