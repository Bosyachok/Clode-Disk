import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createDir, getFiles } from "./../../actions/file";
import "./disk.css";
import back from "./../../assets/img/back.svg";
import FileList from "./fileList/FileList";
import Popup from "./Popup";
import { setPopupDisplay, setCurrent } from "./../../reducers/fileReducer";

const Disk = () => {
  const dispatch = useDispatch();
  const currentDir = useSelector((state) => state.files.currentDir);
  const dirStack = useSelector((state) => state.files.dirStack);

  useEffect(() => {
    dispatch(getFiles(currentDir));
  }, [currentDir]);

  function createDirHandler() {
    dispatch(setPopupDisplay("flex"));
  }
  function backHandler() {
    const backDirId = dirStack.pop();
    dispatch(setCurrent(backDirId));
  }
  return (
    <div className="disk">
      <div className="disk-btn">
        <button className="disk-back" onClick={() => backHandler()}>
          <img src={back} alt="" />
        </button>
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
