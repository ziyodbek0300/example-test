import constants from "./constants";
import search from "../../api/search";

export const setSearchText = (text) => (dispatch) => {
  dispatch({
    type: constants.SET_SEARCH,
    payload: text,
  });
};

export const searchFunc = (data) => (dispatch) => {
  search.search(data).then((response) => {
    console.log(response);
    dispatch({
      type: constants.SEARCH,
      payload: response.data.data,
    });
    dispatch({
      type: constants.LOADING,
      payload: false,
    });
  });
};
