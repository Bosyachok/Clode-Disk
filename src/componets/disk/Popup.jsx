import React, { useState, useEffect } from "react";
import Input from "./../../utils/input/Input";
import { useSelector, useDispatch } from "react-redux";
import { setPopupDisplay } from "./../../reducers/fileReducer";
import { createDir } from "../../actions/file";

const Popup = () => {
  const [dirName, setDirName] = useState("");

  const popupDisplay = useSelector((state) => state.files.popupDisplay);
  const currentDir = useSelector((state) => state.files.currentDir);
  const dispatch = useDispatch();
  // Обработчик события при добавлении новой папки
  function clickHandler() {
    dispatch(createDir(currentDir, dirName));
    clearInput();
    dispatch(setPopupDisplay("none"));
    //Чтобы после добавления папки закрыть модальное окно,
    //можно вызвать функцию, которая будет изменять состояние отображения
    //модального окна на "none", в обработчике события при добавлении новой
    //папки после вызова функции dispatch(createDir(currentDir, dirName)).
  }
  // Функция для очистки поля ввода
  function clearInput() {
    setDirName("");
  }
  useEffect(() => {});

  return (
    <div
      className="popup"
      onClick={() => dispatch(setPopupDisplay("none"))}
      style={{ display: popupDisplay }}
    >
      <div
        className="popup-content"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="popup-header">
          <div className="popup-title">Создать новую папку</div>
          <button
            className="popup-close"
            onClick={() => dispatch(setPopupDisplay("none"))}
          >
            Х{" "}
          </button>
        </div>
        <Input
          type="text"
          placeholder="Введите название папки"
          value={dirName}
          setValue={setDirName}
        />
        <button className="popup-create" onClick={clickHandler}>
          Создать
        </button>
      </div>
    </div>
  );
};

export default Popup;
