import constants from "./constants";

const initialState = {
  loading: true,
  isOpen: false,
  canvas_modal: false,
  canvas_courses_modal: false,
  sync: "",
  codeCanvas: null,
  status: "",
  canvasCourses: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case constants.GET_SETTINGS: {
      return {
        ...state,
        isOpen: action.payload,
      };
    }
    case constants.GET_CANVAS: {
      return {
        ...state,
        canvas_modal: action.payload,
      };
    }
    case constants.SET_CANVAS_COURSES: {
      return {
        ...state,
        canvas_courses_modal: action.payload,
      };
    }
    case constants.GET_CANVAS_CODE: {
      return {
        ...state,
        codeCanvas: action.payload,
      };
    }
    case constants.SYNC_COURSES: {
      return {
        ...state,
        sync: action.payload,
      };
    }
    case constants.CANVAS_AUTH: {
      return {
        ...state,
        status: action.payload,
      };
    }
    case constants.CANVAS_COURSES: {
      return {
        ...state,
        canvasCourses: action.payload,
      };
    }
    default:
      return state;
  }
};

export default reducer;
