import React from "react";
import "./navBar.css";
import logo from "../../assets/img/logo.svg";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="navbar">
      <div className="container">
        <img src={logo} alt="" className="navbar-logo" />
        <div className="navbar-header">MERN CLOUD</div>
        <div className="autorization">
          <div className="navbar-login">
            <NavLink to="/login">Войти</NavLink>
          </div>
          <div className="navbar-registration">
            <NavLink to="/registration">Регистрация</NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
