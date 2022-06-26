import axios from "axios";

const axiosInstance = () => {
  return axios.create({
    baseURL: "https://api.edamam.com/api/recipes/v2",
    params: {
      app_key: process.env.REACT_APP_APP_KEY,
      app_id: process.env.REACT_APP_APP_ID,
      type: "public",
    },
  });
};
export default axiosInstance;
