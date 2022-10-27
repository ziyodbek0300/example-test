import { toast } from "react-toastify";
import rootFolders from "../../api/rootFolders";
import { constants } from "./constants";
import getCurrentFile from "../../api/getCurrentFile";

export const getRootFS = () => (dispatch) => {
  try {
    const token = JSON.parse(localStorage.getItem("token"));
    if (token) {
      rootFolders.getRootFls("token").then((response) => {
        let folders = response.data.data.map((a) => {
          return {
            ...a,
            data_type: "folder",
          };
        });
        dispatch({
          type: constants.GET_ROOTS,
          payload: folders,
        });
        dispatch({
          type: constants.GET_ROOT,
          payload: folders,
        });
      });
    }
  } catch (e) {
    toast(<>{e.message}</>, { type: "warning", autoClose: 500 });
  }
};

export const getNestedFS = (f_id) => (dispatch) => {
  try {
    const token = JSON.parse(localStorage.getItem("token"));
    if (token) {
      rootFolders.getNestedFls("token", f_id).then((response) => {
        let files = response.data.data.files.map((a) => {
          return {
            ...a,
            data_type: "file",
          };
        });
        let folders = response.data.data.folders.map((a) => {
          return {
            ...a,
            data_type: "folder",
          };
        });
        dispatch({
          type: constants.GET_ROOTS,
          payload: [...folders, ...files],
        });
      });
    }
  } catch (e) {
    toast(<div>{e.message}</div>, { type: "warning", autoClose: 500 });
  }
};

export const setLoading = (val) => (dispatch) => {
  dispatch({
    type: constants.SET_LOADING,
    payload: val,
  });
};

export const getCFile = (f_id) => (dispatch) => {
  try {
    const token = JSON.parse(localStorage.getItem("token"));
    if (token) {
      getCurrentFile.getCurrentFl("token", f_id).then((response) => {
        dispatch({
          type: constants.GET_FILE_LINK,
          payload: response.data.data.preview_url,
        });
      });
    }
  } catch (e) {
    toast(<div>{e.message}</div>, { type: "warning", autoClose: 500 });
  }
};
