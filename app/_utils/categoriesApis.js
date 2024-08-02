const { default: axiosClient } = require("./axiosClient");

const getAllMangaList = (type, color, category) =>
  axiosClient.get(
    `/manga-lists?populate=*&sort[0]=id:desc${type}${color}${category}`
  );

export default {
  getAllMangaList,
};
// http://localhost:1337/api/manga-lists?filters[categories][$containsi]=شونين
// http://localhost:1337/api/manga-lists?filters[$or][0][categories][$containsi]=شونين&filters[$or][1][categories][$containsi]=كوميدي
// http://localhost:1337/api/manga-lists?filters[$or][0][categories][$containsi]=${شونين}&filters[$or][1][categories][$containsi]=${كوميدي}&filters[color][$eq]=${ملون}&filters[type][$eq]=${مانهوا}
