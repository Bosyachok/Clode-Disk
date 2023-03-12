import React from "react";
import "./app.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./componets/navbar/NavBar";
import Registration from "./componets/registration/Registration";
import Login from "./componets/registration/Login";
import { useSelector } from "react-redux";

function App() {
  const isAuth = useSelector((state) => state.user.isAuth);
  return (
    <BrowserRouter>
      <div className="app">
        <NavBar />
        <div className="wrap">
          {!isAuth && (
            <Routes>
              <Route path="/registration" element={<Registration />} />
              <Route path="/login" element={<Login />} />
            </Routes>
          )}
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
