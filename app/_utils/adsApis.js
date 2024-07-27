const { default: axiosClient } = require("./axiosClient");

const getADS = () => axiosClient.get("/ads-lists?sort[0]=id:desc&populate=*");

export default {
  getADS,
};
