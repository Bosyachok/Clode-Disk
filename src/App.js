import React from "react";
import "./app.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./componets/navbar/NavBar";
import Registration from "./componets/registration/Registration";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <NavBar />
        <div className="wrap">
          <Routes>
            <Route path="/registration" element={<Registration />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
