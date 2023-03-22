import React from "react";
import "./fileList.css";
import { useSelector } from "react-redux";
import File from "./file/File";

const FileList = () => {
  const files = useSelector((state) => state.files.files).map((file) => (
    <File key={file._id} file={file} />
  ));
  console.log("files", files);
  return (
    <div className="fileList">
      <div className="fileList-header">
        <div className="fileList-name">Название</div>
        <div className="fileList-date">Дата</div>
        <div className="fileList-size">Размер</div>
      </div>
      {files.length !== 0 ? (
        files
      ) : (
        <h1>Файлов нет, файлы пока не добавлены</h1>
      )}
    </div>
  );
};

export default FileList;
