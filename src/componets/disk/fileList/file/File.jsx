import React from "react";
import "./file.css";
import filelogo from "./../../../../assets/img/filelogo.svg";
import papkalogo from "./../../../../assets/img/papkalogo.svg";
import { useDispatch, useSelector } from "react-redux";
import { pushToStack, setCurrent } from "./../../../../reducers/fileReducer";

const File = ({ file }) => {
  const dispatch = useDispatch();
  const currentDir = useSelector((state) => state.files.currentDir);

  function openDirHandler() {
    dispatch(pushToStack(currentDir));
    dispatch(setCurrent(file._id));
  }

  return (
    <div
      className="file"
      onClick={file.type === "dir" ? () => openDirHandler() : ""}
    >
      <img
        className="file-img"
        src={file.type === "dir" ? papkalogo : filelogo}
        alt=""
      />
      <div className="file-name">{file.name}</div>
      <div className="file-date">{file.date.slice(0, 10)}</div>
      <div className="file-size">{file.size}</div>
    </div>
  );
};

export default File;
