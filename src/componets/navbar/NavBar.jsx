import React, { useState } from "react";
import "./navBar.css";
import logo from "../../assets/img/logo.svg";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "./../../reducers/useReducer";
import { searchFiles } from "../../actions/file";
import { getFiles } from "./../../actions/file";
import { showLoader } from "../../reducers/appReducer";

const NavBar = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.user.isAuth);
  const currentDir = useSelector((state) => state.files.currentDir);
  const [searchName, setSearchName] = useState("");
  const [searchTimeout, setSearchTimeout] = useState(false);

  function searchHandler(e) {
    setSearchName(e.target.value);
    if (searchTimeout !== false) {
      clearTimeout(searchTimeout);
    }
    dispatch(showLoader());
    if (e.target.value !== "") {
      setSearchTimeout(
        setTimeout(
          (value) => {
            dispatch(searchFiles(value));
          },
          500,
          e.target.value
        )
      );
    } else {
      dispatch(getFiles(currentDir));
    }
  }
  return (
    <div className="navbar">
      <div className="container">
        <img src={logo} alt="" className="navbar-logo" />
        <div className="navbar-header">MERN CLOUD</div>
        {isAuth && (
          <input
            className="navbar-search"
            value={searchName}
            onChange={(e) => searchHandler(e)}
            type="text"
            placeholder="Название файла"
          />
        )}
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
