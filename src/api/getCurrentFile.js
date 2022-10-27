import axios from ".";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  getCurrentFl: (token, file_id) =>
    axios.get(`fs/get_doc_viewer/canvas/${file_id}`, {
      headers: { token: JSON.parse(localStorage.getItem("token")) },
    }),
};
