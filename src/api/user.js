import axios from ".";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  login: (formData) => axios.post("auth/signin", formData),
};
