const SHOW_UPLOADER = "SHOW_UPLOADER"; //будет менять значени true/false
const HIDE_UPLOADER = "HIDE_UPLOADER";
const ADD_UPLOAD_FILE = "ADD_UPLOAD_FILE";
const REMOVE_UPLOAD = "REMOVE_UPLOAD";
const CHANGE_UPLOAD_FILE = "CHANGE_UPLOAD_FILE";

const defaultState = {
  isVisible: false, //видимость лоадера
  files: [],
};

export default function uploadReducer(state = defaultState, action) {
  switch (action.type) {
    case SHOW_UPLOADER:
      return { ...state, isVisible: true };
    case HIDE_UPLOADER:
      return { ...state, isVisible: false };
    case ADD_UPLOAD_FILE:
      return {
        ...state,
        files: [...state.files, action.payload],
      };
    case REMOVE_UPLOAD:
      return {
        ...state,
        files: [...state.files.filter((file) => file.id !== action.payload)],
      };
    case CHANGE_UPLOAD_FILE:
      return {
        ...state,
        files: [
          ...state.files.map((file) =>
            file.id === action.payload.id
              ? { ...file, progress: action.payload.progress }
              : { ...file }
          ),
        ],
      };

    default:
      return state;
  }
}

export const showUpLoader = () => ({ type: SHOW_UPLOADER });
export const hideUpLoader = () => ({ type: HIDE_UPLOADER });
export const addUploadFile = (file) => ({
  type: ADD_UPLOAD_FILE,
  payload: file,
});
export const removeUpload = (fileId) => ({
  type: REMOVE_UPLOAD,
  payload: fileId,
});
export const chandgeUplaodFile = (payload) => ({
  type: CHANGE_UPLOAD_FILE,
  payload: payload,
});
