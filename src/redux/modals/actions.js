import constants from "./constants";
import canvasAuth from "../../api/canvasAuth";

export const setModal = (val) => (dispatch) => {
  dispatch({
    type: constants.GET_SETTINGS,
    payload: val,
  });
};

export const setCanvasModal = (val) => (dispatch) => {
  dispatch({
    type: constants.GET_CANVAS,
    payload: val,
  });
};

export const setCanvasCoursesModal = (val) => (dispatch) => {
  dispatch({
    type: constants.SET_CANVAS_COURSES,
    payload: val,
  });
};

export const setCodeCanvas = (val) => (dispatch) => {
  dispatch({
    type: constants.GET_CANVAS_CODE,
    payload: val,
  });
};

export const canvasAuthAction = (code) => (dispatch) => {
  try {
    canvasAuth.canvasAuth(code).then((data) => {
      dispatch({
        type: constants.CANVAS_AUTH,
        payload: data.status,
      });
    });
  } catch (e) {}
};

export const canvasCourses = () => (dispatch) => {
  try {
    canvasAuth.getCourses().then((data) => {
      dispatch({
        type: constants.CANVAS_COURSES,
        payload: data.data.data,
      });
    });
  } catch (e) {
    alert(e);
  }
};

export const setSyncCourses = (dataA) => (dispatch) => {
  try {
    canvasAuth.syncCourse(dataA).then((data) => {
      dispatch({
        type: constants.SYNC_COURSES,
        payload: data.status,
      });
    });
  } catch (e) {
    alert(e);
  }
};
