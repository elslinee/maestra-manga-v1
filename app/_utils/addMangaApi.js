import { parseCookies } from "nookies";

const { default: axiosClient } = require("./axiosClient");

const cookies = parseCookies();
const token = cookies.token;
const addManga = (mangaData) =>
  axiosClient.post(
    "/manga-lists?populate=*",
    {
      data: mangaData,
    },
    {
      headers: {
        Authorization: `Bearer ${token}`, // Add the token to the Authorization header
      },
    }
  );

export default {
  addManga,
};
