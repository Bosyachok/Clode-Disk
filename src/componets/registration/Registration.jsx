import React, { useState } from "react";
import "./reg.css";
import Input from "./../../utils/input/Input";
import { login, registration } from "../../actions/user";
import { useDispatch } from "react-redux";

const Registration = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const regAndLogin = () => {
    registration(email, password).then(() => dispatch(login(email, password)));
  };
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

      <button className="registration-btn" onClick={regAndLogin}>
        Зарегистрироваться
      </button>
    </div>
  );
};

export default Registration;
