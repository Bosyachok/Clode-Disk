import React from "react";
import "./uploadFile.css";
import { useDispatch } from "react-redux";
import { removeUpload } from "./../../../reducers/uploadReducer";

const UploadFile = ({ file }) => {
  const dispatch = useDispatch();

  return (
    <div className="upload-file">
      <div className="upload-file_header">
        <div className="upload-file_name">{file.name}</div>
        <button
          className="upload-file_remove"
          onClick={() => dispatch(removeUpload(file.id))}
        >
          X
        </button>
      </div>
      <div className="upload-file_progress">
        <div
          className="upload-file__upload-bar"
          style={{ width: file.progress + "%" }}
        ></div>
        <div className="upload-file__percent">{file.progress}%</div>
      </div>
    </div>
  );
};

export default UploadFile;
