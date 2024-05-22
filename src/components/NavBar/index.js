import React from "react";
import { NavLink } from "react-router-dom";
import { BsHandbag } from "react-icons/bs";
import { CiBookmark, CiHome } from "react-icons/ci";
import { MdMenu } from "react-icons/md";
import "./index.css";

const NavBar = () => {
  return (
    <div className="nav-container">
      <div className="nav-items">
        <div className="">
          <MdMenu className="menu" />
        </div>
        <div className="">
          <h1 className="app-name">Furrl</h1>
        </div>
        <div className="">
        <NavLink to="/" className="nav-link ng">
          <CiHome className="cart" />
          </NavLink>  
          <NavLink to="/bookmark" className="nav-link ng">
          <CiBookmark className="cart" />
          </NavLink>
          <NavLink to="/cart" className="nav-link ng">
            <BsHandbag className="cart" />
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
