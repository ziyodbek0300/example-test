import { constants } from "./constants";

const initialState = {
  currentUser: {},
  currentToken: {},
  loading: true,
  users: {
    admin: [],
    agent: [],
    newAgent: [],
  },
  error: {
    isHave: false,
    message: "",
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case constants.loading: {
      return {
        ...state,
        loading: true,
      };
    }
    case constants.login: {
      return {
        ...state,
        user: action.payload,
      };
    }
    case constants.SET_TOKEN: {
      return {
        ...state,
        currentToken: action.payload,
      };
    }
    case constants.getMe: {
      return {
        ...state,
        currentUser: action.payload,
        loading: false,
      };
    }
    default:
      return state;
  }
};

export default reducer;
