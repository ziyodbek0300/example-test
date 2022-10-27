import constants from "./constants";

export const setBRS = (brs) => (dispatch) => {
  dispatch({
    type: constants.SET_BRS,
    payload: brs,
  });
};
