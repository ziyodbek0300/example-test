import axios from ".";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  search: (data) => axios.post("search/query", data),
};
