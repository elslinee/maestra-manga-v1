const { default: axiosClient } = require("./axiosClient");

const token = localStorage.getItem("token"); // Retrieve the token from localStorage

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
