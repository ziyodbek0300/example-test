import { constants } from "./constants";
import user from "../../api/user";
// import Cookies from "js-cookie";
import { toast } from "react-toastify";

export const LoadingUser = () => (dispatch) => {
  dispatch({ type: constants.loading });
};

export const logOut = () => (dispatch) => {
  dispatch({
    type: constants.getMe,
    payload: {},
  });
};

export const loginUser =
  (formData, callBack = () => ({})) =>
  (dispatch) => {
    user
      .login(formData)
      .then((r) => {
        let token = r.data.data.auth_token;
        localStorage.setItem("token", JSON.stringify(token));
        dispatch({
          type: constants.SET_TOKEN,
          payload: token,
        });
        callBack();
        setTimeout(() => {
            window.location.reload();
        }, 500);
      })
      .catch((e) => {
        toast(<div>User not found</div>, { type: "warning", autoClose: 500 });
      });
  };

export const getRootFS = () => {
  try {
    const token = JSON.parse(localStorage.getItem("token"));
    if (token) {
    }
  } catch (e) {
    toast(<div>{e.message}</div>, { type: "warning", autoClose: 500 });
  }
};
