import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createDir, getFiles, uploadFile } from "./../../actions/file";
import "./disk.css";
import back from "./../../assets/img/back.svg";
import FileList from "./fileList/FileList";
import Popup from "./Popup";
import {
  setPopupDisplay,
  setCurrent,
  setFileView,
} from "./../../reducers/fileReducer";
import Uploader from "./uploader/Uploader";

const Disk = () => {
  const dispatch = useDispatch();
  const currentDir = useSelector((state) => state.files.currentDir);
  const dirStack = useSelector((state) => state.files.dirStack);
  const loader = useSelector((state) => state.app.loader);
  const [dragEnter, setDragEnter] = useState(false);
  const [sort, setSort] = useState("type");

  useEffect(() => {
    dispatch(getFiles(currentDir, sort));
  }, [currentDir, sort]);

  function createDirHandler() {
    dispatch(setPopupDisplay("flex"));
  }
  function backHandler() {
    const backDirId = dirStack.pop(); //получаем последний элемент, тот кот лежит на верхушке
    dispatch(setCurrent(backDirId));
  }
  function fileUploadHandler(event) {
    const files = [...event.target.files];
    files.forEach((file) => dispatch(uploadFile(file, currentDir)));
  }
  function dragEnterHandler(event) {
    event.preventDefault();
    event.stopPropagation();
    setDragEnter(true);
  }
  function dragLeaveHandler(event) {
    event.preventDefault();
    event.stopPropagation();
    setDragEnter(false);
  }
  function dropHandler(event) {
    event.preventDefault();
    event.stopPropagation();
    let files = [...event.dataTransfer.files];
    files.forEach((file) => dispatch(uploadFile(file, currentDir)));
    setDragEnter(false);
  }
  if (loader) {
    return (
      <div className="loader">
        <div className="lds-default">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    );
  }
  return !dragEnter ? (
    <div
      className="disk"
      onDragEnter={dragEnterHandler}
      onDragLeave={dragLeaveHandler}
      onDragOver={dragEnterHandler}
    >
      <div className="disk-btn">
        <button className="disk-back" onClick={() => backHandler()}>
          <img src={back} alt="" />
        </button>
        <button className="disk-create" onClick={() => createDirHandler()}>
          Создать папку
        </button>
        <div className="disk-upload">
          <label htmlFor="disk-upload-input" className="disk-upload-label">
            Загрузить файл
          </label>
          <input
            onChange={(event) => fileUploadHandler(event)}
            multiple={true}
            type="file"
            id="disk-upload-input"
            className="disk-upload-input"
          />
        </div>
        <div style={{ display: "flex" }}>
          <select
            className="disk-select"
            value={sort}
            onChange={(e) => setSort(e.target.value)}
          >
            <option value="name">По имени</option>
            <option value="type">По типу</option>
            <option value="date">По дате</option>
          </select>
          <div>
            <button
              className="disk-plate"
              onClick={() => dispatch(setFileView("plate"))}
            ></button>
            <button
              className="disk-list"
              onClick={() => dispatch(setFileView("list"))}
            ></button>
          </div>
        </div>
      </div>
      <FileList />
      <Popup />
      <Uploader />
    </div>
  ) : (
    <div
      className="drop-area"
      onDragEnter={dragEnterHandler}
      onDragLeave={dragLeaveHandler}
      onDragOver={dragEnterHandler}
      onDrop={dropHandler}
    >
      Перетащите файлы сюды
    </div>
  );
};

export default Disk;
