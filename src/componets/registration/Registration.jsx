import React, { useState } from "react";
import "./reg.css";
import Input from "./../../utils/input/Input";
import { registration } from "../../actions/user";

const Registration = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="registration">
      <div className="registration-header">Регистрация</div>
      <form action="">
        <Input
          value={email}
          setValue={setEmail}
          type="text"
          placeholder="Введите email"
        />
        <Input
          value={password}
          setValue={setPassword}
          type="password"
          placeholder=" Введите password"
        />
      </form>

      <button
        className="registration-btn"
        onClick={() => registration(email, password)}
      >
        Зарегистрироваться
      </button>
    </div>
  );
};

export default Registration;
