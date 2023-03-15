import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFiles } from "./../../actions/file";
import "./disk.css";
import FileList from "./fileList/FileList";

const Disk = () => {
  const dispatch = useDispatch();
  const currentDir = useSelector((state) => state.files.currentDir);

  useEffect(() => {
    dispatch(getFiles(currentDir));
  }, [currentDir]);

  return (
    <div className="disk">
      <div className="disk-btn">
        <button className="disk-back">Назад</button>
        <button className="disk-create">Создать папку</button>
      </div>
      <FileList />
    </div>
  );
};

export default Disk;
