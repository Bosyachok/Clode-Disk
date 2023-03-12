import React, { useEffect } from "react";
import "./app.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./componets/navbar/NavBar";
import Registration from "./componets/registration/Registration";
import Login from "./componets/registration/Login";
import { useSelector, useDispatch } from "react-redux";
import { auth } from "./actions/user";

function App() {
  const isAuth = useSelector((state) => state.user.isAuth);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(auth());
  }, []);
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
