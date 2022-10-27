import constants from "./constants";

const initialState = {
  loading: true,
  searchText: "",
  searchData: null,
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
        loading: action.payload,
      };
    }
    case constants.SET_SEARCH: {
      return {
        ...state,
        searchText: action.payload,
      };
    }
    case constants.SEARCH: {
      return {
        ...state,
        searchData: action.payload,
      };
    }
    default:
      return state;
  }
};

export default reducer;
