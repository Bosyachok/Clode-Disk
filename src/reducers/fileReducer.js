const SET_FILES = "SET_FILES";
const SET_CURRENT_DIR = "SET_CURRENT_DIR";
const ADD_FILE = "ADD_FILE";
const SET_POPUP_DISPLAY = "SET_POPUP_DISPLAY";
const PUSH_TO_STACK = "PUSH_TO_STACK";
const DELETE_FILE = "DELETE_FILE";

const defaultState = {
  files: [],
  currentDir: null,
  popupDisplay: "none",
  dirStack: [],
};
//stack это стукртура данный по принципу последним зашел первым вышел, последнняя папка открытая будет лежать на вершине

export default function fileReducer(state = defaultState, action) {
  console.log("actionDelete", action);
  switch (action.type) {
    case SET_FILES:
      return { ...state, files: action.payload }; //возвращаем изменный поле files
    case SET_CURRENT_DIR:
      return { ...state, currentDir: action.payload }; //текущая директория
    case ADD_FILE:
      return { ...state, files: [...state.files, action.payload] }; //текущая директория
    case SET_POPUP_DISPLAY:
      return { ...state, popupDisplay: action.payload }; //текущая директория

    case PUSH_TO_STACK:
      return { ...state, dirStack: [...state.dirStack, action.payload] }; //текущая директория
    case DELETE_FILE:
      return {
        ...state,
        files: [...state.files.filter((file) => file._id !== action.payload)],
      };
    default:
      return state;
  }
}

export const setFiles = (files) => ({ type: SET_FILES, payload: files });
export const setCurrent = (dir) => ({ type: SET_CURRENT_DIR, payload: dir });
export const addFile = (file) => ({ type: ADD_FILE, payload: file });
export const setPopupDisplay = (display) => ({
  type: SET_POPUP_DISPLAY,
  payload: display,
});
export const pushToStack = (dir) => ({
  type: PUSH_TO_STACK,
  payload: dir,
});
export const deleteFileAction = (dirId) => ({
  type: DELETE_FILE,
  payload: dirId,
});
//action.payload - это свойство объекта action, которое содержит данные,
//переданные в экшен.

//При вызове экшена setFiles, вы передаете массив файлов в качестве аргумента,
// который вы сохраняете в свойстве payload:
