const { default: axiosClient } = require("./axiosClient");

const addUser = (userData) =>
  axiosClient.post("/auth/local/register", userData);

const userLogin = (userData) => axiosClient.post("/auth/local", userData);

export default {
  addUser,
  userLogin,
};
