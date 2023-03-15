import React from "react";
import "./fileList.css";
import { useSelector } from "react-redux";
import File from "./file/File";

const FileList = () => {
  const files = useSelector((state) => state.files.files).map((file) => (
    <File key={file.id} file={file} />
  ));

  return (
    <div className="fileList">
      <div className="fileList-header">
        <div className="fileList-name">Название</div>
        <div className="fileList-date">Дата</div>
        <div className="fileList-size">Размер</div>
      </div>
      {files}
    </div>
  );
};

export default FileList;
