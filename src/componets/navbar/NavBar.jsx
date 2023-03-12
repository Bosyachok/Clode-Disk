import React from "react";
import "./navBar.css";
import logo from "../../assets/img/logo.svg";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const NavBar = () => {
  const isAuth = useSelector((state) => state.user.isAuth);
  return (
    <div className="navbar">
      <div className="container">
        <img src={logo} alt="" className="navbar-logo" />
        <div className="navbar-header">MERN CLOUD</div>
        <div className="autorization">
          {!isAuth && (
            <div className="navbar-login">
              <Link to="/login">Войти</Link>
            </div>
          )}

          {!isAuth && (
            <div className="navbar-registration">
              <Link to="/registration">Регистрация</Link>
            </div>
          )}

          {isAuth && <div className="navbar-login">Выйти</div>}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
