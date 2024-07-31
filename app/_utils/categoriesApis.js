const { default: axiosClient } = require("./axiosClient");

const getAllMangaList = (type, color, category) =>
  axiosClient.get(
    `/manga-lists?populate=*&sort[0]=id:desc${type}${color}${category}`
  );

const getCategory = (category) =>
  axiosClient.get(`/manga-lists?populate=*${category}`);
const getType = (type) => axiosClient.get(`/manga-lists?populate=*${type}`);
const getColor = (color) => axiosClient.get(`/manga-lists?populate=*${color}`);

export default {
  getAllMangaList,
  getCategory,
  getType,
  getColor,
};
// http://localhost:1337/api/manga-lists?filters[categories][$containsi]=شونين
// http://localhost:1337/api/manga-lists?filters[$or][0][categories][$containsi]=شونين&filters[$or][1][categories][$containsi]=كوميدي
// http://localhost:1337/api/manga-lists?filters[$or][0][categories][$containsi]=${شونين}&filters[$or][1][categories][$containsi]=${كوميدي}&filters[color][$eq]=${ملون}&filters[type][$eq]=${مانهوا}
