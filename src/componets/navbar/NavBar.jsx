import React from "react";
import "./navBar.css";
import logo from "../../assets/img/logo.svg";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "./../../reducers/useReducer";

const NavBar = () => {
  const dispatch = useDispatch();
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

          {isAuth && (
            <div className="navbar-login" onClick={() => dispatch(logout())}>
              Выйти
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
