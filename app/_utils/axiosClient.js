const { default: axios } = require("axios");

const apiUrl = "https://maestra-manga-strapi.onrender.com/api";
const axiosClient = axios.create({
  baseURL: apiUrl,
});

export default axiosClient;
