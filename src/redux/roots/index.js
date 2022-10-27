import { constants } from "./constants";

const initialState = {
  loading: true,
  root_folders: null,
  root_folder: [],
  canvas_id: "",
  personal_id: "",
  shared_id: "",
  file_url: "",
  error: {
    isHave: false,
    message: "",
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case constants.LOADING: {
      return {
        ...state,
        loading: true,
      };
    }
    case constants.SET_LOADING: {
      return {
        ...state,
        loading: action.payload,
      };
    }
    case constants.GET_ROOTS: {
      return {
        ...state,
        root_folders: action.payload,
        loading: false,
      };
    }
    case constants.GET_ROOT: {
      return {
        ...state,
        root_folder: action.payload,
        loading: false,
      };
    }
    case constants.GET_FILE_LINK: {
      return {
        ...state,
        file_url: action.payload,
        loading: false,
      };
    }
    default:
      return state;
  }
};

export default reducer;
