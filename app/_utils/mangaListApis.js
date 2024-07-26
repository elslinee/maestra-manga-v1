const { default: axiosClient } = require("./axiosClient");

const getMangaList = () =>
  axiosClient.get(`/manga-lists?sort[0]=id:desc&populate=*`);

export default {
  getMangaList,
};
