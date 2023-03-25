import React from "react";
import "./fileList.css";
import { useSelector } from "react-redux";
import File from "./file/File";
import { TransitionGroup, CSSTransition } from "react-transition-group";
const FileList = () => {
  const { files } = useSelector((state) => state.files);
  const fileView = useSelector((state) => state.files.view);

  if (files.length === 0) {
    return <div className="fileList-fileNull">Папка пустая</div>;
  }
  if (fileView === "plate") {
    // console.log(files, "files");
    return (
      <div className="file-plateMain">
        {files.map((file) => (
          <File key={file._id} file={file} />
        ))}
      </div>
    );
  }
  if (fileView === "list") {
    return (
      <div className="fileList">
        <div className="fileList-header">
          <div className="fileList-name">Название</div>
          <div className="fileList-date">Дата</div>
          <div className="fileList-size">Размер</div>
        </div>
        <div>
          <TransitionGroup>
            {files.map((file) => (
              <CSSTransition
                key={file._id}
                classNames={"file"}
                timeout={500}
                appear
                unmountOnExit
              >
                <File file={file} />
              </CSSTransition>
            ))}
          </TransitionGroup>
        </div>
      </div>
    );
  }
};

export default FileList;
