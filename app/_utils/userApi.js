import { parseCookies } from "nookies";

const { default: axiosClient } = require("./axiosClient");
const cookies = parseCookies();
const token = cookies.token;

const getUser = () =>
  axiosClient.get("/users/me?populate=*", {
    headers: {
      Authorization: `Bearer ${token}`, // Add the token to the Authorization header
    },
  });

export default {
  getUser,
};
