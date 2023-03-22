import axios from "axios";
import { addFile, setFiles, deleteFileAction } from "../reducers/fileReducer";

export function getFiles(dirId) {
  //передаем парамер текущей директории в которой находимся
  return async (dispatch) => {
    try {
      const response = await axios.get(
        `http://localhost:5000/api/files${dirId ? "?parent=" + dirId : ""}`,
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        }
      );
      dispatch(setFiles(response.data));
      console.log(response.data);
    } catch (error) {
      alert(error.response.data.message);
    }
  };
}
export function createDir(dirId, name) {
  //передаем парамер текущей директории в которой находимся
  return async (dispatch) => {
    try {
      const response = await axios.post(
        `http://localhost:5000/api/files`,
        { name, parent: dirId, type: "dir" },
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        }
      );
      dispatch(addFile(response.data));
      console.log(response.data);
    } catch (error) {
      alert(error.response.data.message);
    }
  };
}

export function uploadFile(file, dirId) {
  return async (dispatch) => {
    try {
      const formData = new FormData();
      formData.append("file", file);
      if (dirId) {
        formData.append("parent", dirId);
      }
      const response = await axios.post(
        `http://localhost:5000/api/files/upload`,
        formData,
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
          onUploadProgress: (progressEvent) => {
            const totalLength = progressEvent.event.lengthComputable
              ? progressEvent.total
              : progressEvent.event.target.getResponseHeader(
                  "content-length"
                ) ||
                progressEvent.event.target.getResponseHeader(
                  "x-decompressed-content-length"
                );
            console.log("total", totalLength);
            if (totalLength) {
              let progress = Math.round(
                (progressEvent.loaded * 100) / totalLength
              );
              console.log(progress);
            }
          },
        }
      );
      dispatch(addFile(response.data));
    } catch (e) {
      alert(e.response.data.message);
    }
  };
}

export async function downloadFile(file) {
  const response = await fetch(
    `http://localhost:5000/api/files/download?id=${file._id}`,
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }
  );

  if (response.status === 200) {
    const blob = await response.blob(); // это подобный физическому файлу обьект, получаеим из ответа сервера
    const downloadUrl = window.URL.createObjectURL(blob); //из blob созадем url, грубо говоря получили файл в бинарном виде
    const link = document.createElement("a"); //перебразовываем в норм файл
    link.href = downloadUrl; //создается невидимая ссылка указываем URL полученый из blob
    link.download = file.name; //У ССЫЛКИ УКАЗЫВАЕМ ИМЯ ФАЙЛА
    document.body.appendChild(link); //добавляем эту ссылку в документ с пом appendChild - является частью документа
    link.click(); //имитируем нажатие пользователя на эту ссыку
    link.remove(); //удаляем
  }
}
export function deleteFile(file) {
  return async (dispatch) => {
    try {
      const response = await axios.delete(
        `http://localhost:5000/api/files?id=${file._id}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      dispatch(deleteFileAction(file._id));
      alert(response.data.message);
    } catch (error) {
      alert(error.response.data.message);
    }
  };
}
