import React from "react";
import "./uploader.css";
import UploadFile from "./UploadFile";
import { useSelector, useDispatch } from "react-redux";
import { hideUpLoader } from "./../../../reducers/uploadReducer";

const Uploader = () => {
  const files = useSelector((state) => state.upload.files);
  const isVisible = useSelector((state) => state.upload.isVisible);
  const dispatch = useDispatch();

  return (
    isVisible && (
      <div className="uploader">
        <div className="uploader-header">
          <div className="uploader-title">Загрузки</div>
          <button
            className="uploader-close"
            onClick={() => dispatch(hideUpLoader())}
          >
            X
          </button>
        </div>
        {files.map((file) => {
          return <UploadFile key={file.id} file={file} />;
        })}
      </div>
    )
  );
};

export default Uploader;
