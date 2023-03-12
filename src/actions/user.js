import axios from "axios";
import { setUser } from "./../reducers/useReducer";

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
