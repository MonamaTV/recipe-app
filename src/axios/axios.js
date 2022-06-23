import axios from "axios";

const axiosInstance = () => {
  return axios.create({
    baseURL: "https://api.edamam.com/api/recipes/v2",
    params: {
      app_key: "647210a8475470fe11cc9ddc8d1984fb",
      app_id: "30cade9c",
      type: "public",
    },
  });
};
export default axiosInstance;
