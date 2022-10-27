import axios from "axios";
// import Cookies from "js-cookie";

export const MainApi = "http://34.75.28.195:5001/api/1/";

const instance = axios.create({
  baseURL: `${MainApi}`,
});

instance.interceptors.request.use(
  async (config) => {
    config.meta = config.meta || {};
    config.meta.requestStartedAt = new Date().getTime();
    config.headers = {
      ...config.headers,
      accept: "application/json",
      "Content-Type": "application/x-www-form-urlencoded",
    };
    return config;
  },
  (error) => Promise.reject(error.response)
);

instance.interceptors.response.use(
  (response) => {
    console.log(
      `Execution time for: ${response.config.url} - ${
        new Date().getTime() - response.config.meta.requestStartedAt
      } ms`
    );
    return response;
  },
  (error) => {
    return Promise.reject(error.response);
  }
);

export default instance;
