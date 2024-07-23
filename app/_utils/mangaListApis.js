const { default: axiosClient } = require("./axiosClient");

const getMangaList = () => axiosClient.get(`/manga-lists?populate=*`);

export default {
  getMangaList,
};
