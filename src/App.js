import React, { useEffect } from "react";
import "./app.css";

import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import NavBar from "./componets/navbar/NavBar";
import Registration from "./componets/registration/Registration";
import Login from "./componets/registration/Login";
import { useSelector, useDispatch } from "react-redux";
import { auth } from "./actions/user";
import Disk from "./componets/disk/Disk";
import Profile from "./componets/profile/Profile";

function App() {
  const isAuth = useSelector((state) => state.user.isAuth);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(auth());
  }, [dispatch]);

  return (
    <BrowserRouter>
      <div className="app">
        <NavBar />
        <div className="wrap">
          <Routes>
            {!isAuth ? (
              <>
                <Route path="/registration" element={<Registration />} />
                <Route path="/login" element={<Login />} />
                <Route path="*" element={<Navigate to="/login" replace />} />
              </>
            ) : (
              <>
                <Route path="/" element={<Disk />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="*" element={<Navigate to="/" replace />} />
              </>
            )}
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
