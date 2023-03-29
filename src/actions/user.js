import axios from "axios";
import { setUser } from "../reducers/useReducer";

import { API_URL } from "./../config";

export const registration = async (email, password) => {
  try {
    const response = await axios.post(
      `http://localhost:5000/api/auth/registration`,
      {
        email,
        password,
      }
    );
    alert(response.data.message);
  } catch (e) {
    alert(e.response.data.message);
  }
};

export const login = (email, password) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(
        `http://localhost:5000/api/auth/login`,
        {
          email,
          password,
        }
      );
      dispatch(setUser(response.data.user));
      localStorage.setItem("token", response.data.token);
    } catch (e) {
      alert(e.response.data.message);
    }
  };
};
export const auth = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`http://localhost:5000/api/auth/auth`, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });
      console.log("response.data", response.data);
      dispatch(setUser(response.data.user));
      localStorage.setItem("token", response.data.token);
    } catch (e) {
      alert(e.response.data.message);
      localStorage.removeItem("token");
    }
  };
};
export const uploadAvatar = (file) => {
  return async (dispatch) => {
    try {
      const formData = new FormData();
      formData.append("file", file);
      const response = await axios.post(
        `${API_URL}/api/files/avatar`,
        formData,
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        }
      );
      dispatch(setUser(response.data));
    } catch (error) {
      console.log(error);
    }
  };
};
export const deleteAvatar = (file) => {
  return async (dispatch) => {
    try {
      const response = await axios.delete(`${API_URL}/api/files/avatar`, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });
      dispatch(setUser(response.data));
    } catch (e) {
      console.log(e);
    }
  };
};
// import axios from "axios";
// import { setUser } from "../reducers/useReducer";
// // import Login from "./../componets/registration/Login";

// export const registration = async (email, password) => {
//   try {
//     const res = await axios.post(
//       "http://localhost:5000/api/auth/registration",
//       {
//         email,
//         password,
//       }
//     );
//     alert(res.data.message);
//   } catch (e) {
//     alert(e.response.data.message);
//   }
// };
// export const login = (email, password) => {
//   return async (dispatch) => {
//     try {
//       const response = await axios.post(
//         "http://localhost:5000/api/auth/login",
//         {
//           email,
//           password,
//         }
//       );
//       if (
//         response.data &&
//         response.data.user === "object" &&
//         response.data.user
//       ) {
//         dispatch(setUser(response.data.user));
//         console.log(response.data, "error");
//         localStorage.setItem("token", response.data.token);
//       } else {
//         console.log("invalid response data");
//       }
//     } catch (e) {
//       alert(e);
//     }
//   };
// };
