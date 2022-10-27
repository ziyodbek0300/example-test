import constants from "./constants";

const initialState = {
  breadcrumbItems: [
    {
      title: "All",
      index: 0,
      folder_id: "root",
      path: "/",
    },
  ],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case constants.SET_BRS: {
      let data = [];
      let isDef = [false, null];
      state.breadcrumbItems.map((b, index) => {
        if (
          b.index !== action.payload.index &&
          b.title !== action.payload.title
        ) {
          data.push(b);
        } else {
          isDef = [true, index];
          data.push(b);
        }
        return true;
      });
      if (!isDef[0] && isDef[1] === null) {
        data = [...data, action.payload];
      } else {
        data = data.slice(0, +isDef[1] + 1);
      }
      return {
        ...state,
        breadcrumbItems: data,
      };
    }
    default:
      return state;
  }
};

export default reducer;
