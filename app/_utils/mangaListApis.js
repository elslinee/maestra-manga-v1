const { default: axiosClient } = require("./axiosClient");

const getMangaList = () =>
  axiosClient.get(`/manga-lists?sort[0]=id:desc&populate=*`);
const getMangaById = (id) => axiosClient.get(`/manga-lists/${id}?populate=*`);
const getMangaByTitle = (title) =>
  axiosClient.get(`/manga-lists?filters[title][$eq]=${title}&populate=*`);

export default {
  getMangaList,
  getMangaById,
  getMangaByTitle,
};
// http://localhost:1337/api/manga-lists?filters[categories][$containsi]=شونين
// http://localhost:1337/api/manga-lists?filters[$or][0][categories][$containsi]=شونين&filters[$or][1][categories][$containsi]=كوميدي
// http://localhost:1337/api/manga-lists?filters[$or][0][categories][$containsi]=${شونين}&filters[$or][1][categories][$containsi]=${كوميدي}&filters[color][$eq]=${ملون}&filters[type][$eq]=${مانهوا}
