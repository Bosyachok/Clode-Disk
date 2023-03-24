import React from "react";
import "./file.css";
import filelogo from "./../../../../assets/img/filelogo.svg";
import papkalogo from "./../../../../assets/img/papkalogo.svg";
import save from "./../../../../assets/img/save.svg";
import deletE from "./../../../../assets/img/deletE.svg";
import { useDispatch, useSelector } from "react-redux";
import { pushToStack, setCurrent } from "./../../../../reducers/fileReducer";
import { downloadFile, deleteFile } from "../../../../actions/file";
import sizeFormat from "../../../../utils/input/sizeFormat";

const File = ({ file }) => {
  const dispatch = useDispatch();
  const currentDir = useSelector((state) => state.files.currentDir);

  function openDirHandler(file) {
    if (file.type === "dir") {
      dispatch(pushToStack(currentDir));
      dispatch(setCurrent(file._id));
    }
  }
  function downloadClickHandler(e) {
    e.stopPropagation();
    downloadFile(file);
  }
  function deleteClickHandler(e) {
    e.stopPropagation();
    dispatch(deleteFile(file));
  }
  return (
    <div
      className="file"
      onClick={() => openDirHandler(file)} //вызывается ток тогда когда тип файла равен dir
    >
      <img
        className="file-img"
        src={file.type === "dir" ? papkalogo : filelogo}
        alt=""
      />
      <div className="file-name">{file.name}</div>
      {file.type !== "dir" && (
        <button
          className=" file-download"
          onClick={(e) => downloadClickHandler(e)}
        >
          <img src={save} alt="" />
        </button>
      )}
      <button className=" file-delete" onClick={(e) => deleteClickHandler(e)}>
        <img src={deletE} alt="" />
      </button>
      <div className="file-btn file-date">{file.date.slice(0, 10)}</div>
      <div className="file-btn file-size">{sizeFormat(file.size)}</div>
    </div>
  );
};

export default File;
