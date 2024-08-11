const { default: axiosClient } = require("./axiosClient");
const token = localStorage.getItem("token");

const getUser = () =>
  axiosClient.get("/users/me?populate=*", {
    headers: {
      Authorization: `Bearer ${token}`, // Add the token to the Authorization header
    },
  });

export default {
  getUser,
};
