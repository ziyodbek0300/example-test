import axios from ".";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  // get: (body) => axios.post("/", body),
  // register: (body) => axios.post("register", body),
  // add: (body) => axios.post("/user/add", body),
  canvasAuth: (code) => axios.post("canvas/auth", code),
  getCourses: () => axios.get("canvas/courses"),
  syncCourse: (data) => axios.post("canvas/sync", data),
  // getMe: (cancelToken) => axios.get("user/getMe", {cancelToken}),
  // getAll: (cancelToken) => axios.get("user/getAll", {cancelToken}),
  // acceptUser: (id, cancelToken) => axios.post(`user/acceptAgent/${id}`, {}, {cancelToken}),
  // deleteUser: (id, cancelToken) => axios.put(`user/deleteUser/${id}`, {}, {cancelToken}),
  // updateUser: (id, data, cancelToken) => axios.put(`user/update/${id}`, data, {cancelToken}),
};
