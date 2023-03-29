import React, { useState } from "react";

import { deleteAvatar, uploadAvatar } from "./../../actions/user";
import { useDispatch } from "react-redux";

const Profile = () => {
  const dispatch = useDispatch();
  const [_file, setFile] = useState("");

  const changeHandler = () => {
    dispatch(uploadAvatar(_file));
  };

  return (
    <div>
      <button onClick={() => dispatch(deleteAvatar())}>
        Удалить аватар :(({" "}
      </button>
      <input
        accept="image/*" //указываем png или jpg
        type="file"
        placeholder="Загрузить аватар"
        onChange={(e) => setFile(e.target.files[0])}
      />
      <button onClick={changeHandler}>добавить</button>
    </div>
  );
};

export default Profile;
