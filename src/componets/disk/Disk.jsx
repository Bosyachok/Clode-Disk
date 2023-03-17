import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createDir, getFiles } from "./../../actions/file";
import "./disk.css";
import FileList from "./fileList/FileList";
import Popup from "./Popup";
import { setPopupDisplay } from "./../../reducers/fileReducer";

const Disk = () => {
  const dispatch = useDispatch();
  const currentDir = useSelector((state) => state.files.currentDir);

  useEffect(() => {
    dispatch(getFiles(currentDir));
  }, [currentDir]);
  function createDirHandler() {
    dispatch(setPopupDisplay("flex"));
  }
  return (
    <div className="disk">
      <div className="disk-btn">
        <button className="disk-back">Назад</button>
        <button className="disk-create" onClick={() => createDirHandler()}>
          Создать папку
        </button>
      </div>
      <FileList />
      <Popup />
    </div>
  );
};

export default Disk;
