import axios from ".";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  getRootFls: (token) =>
    axios.get("fs/get_root_folders", {
      headers: { token: JSON.parse(localStorage.getItem("token")) },
    }),
  getNestedFls: (token, folder_id) =>
    axios.get(`fs/get_folder/${folder_id}`, {
      headers: { token: JSON.parse(localStorage.getItem("token")) },
    }),
  uploadFile: (f_data) => axios.post("fs/upload_file", f_data),
  createFolder: (f_data) => axios.post("fs/create_folder", f_data),
};
