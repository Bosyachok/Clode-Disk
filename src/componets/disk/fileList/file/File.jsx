import React from "react";
import "./file.css";
import filelogo from "./../../../../assets/img/filelogo.svg";
import papkalogo from "./../../../../assets/img/papkalogo.svg";

const File = ({ file }) => {
  return (
    <div className="file">
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
