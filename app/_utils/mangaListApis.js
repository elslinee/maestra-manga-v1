const { default: axiosClient } = require("./axiosClient");

const getMangaList = () =>
  axiosClient.get(`/manga-lists?sort[0]=id:desc&populate=*`);

const getMangaListSort = () =>
  axiosClient.get(`/manga-lists?sort[0]=title:asc&populate=*`);
const getMangaById = (id) => axiosClient.get(`/manga-lists/${id}?populate=*`);

const getMangaByTitle = (title) =>
  axiosClient.get(
    `/manga-lists?filters[title][$eq]=${title}&populate[cover]=*&populate[chapters][populate][pages][sort][name]=asc`
  );
const getMangaChapters = () =>
  axiosClient.get(
    `/manga-lists?sort[0]=id:desc&populate[cover]=*&populate[chapters][populate][pages][populate][cover]=*&populate[chapters][populate][manga_lists][populate][cover][sort][name]=asc`
  );
const getMangaBySearch = (query) =>
  axiosClient.get(
    `/manga-lists?filters[title][$startsWithi]=${query}&populate=*`
  );

// https://maestra-manga-strapi.onrender.com/api/manga-lists?filters[title][$eq]=%E2%81%A0Children%20of%20Vamfield&populate[cover]=*&populate[chapters][populate][pages][populate][cover]=*&populate[chapters][populate][manga_lists][populate][cover][sort][name]=asc
// http://localhost:1337/api/manga-lists?filters[title][$eq]=Dragon%20Ball%20Kakumei&populate[cover]=*&populate[chapters][populate][pages][sort][name]=asc

export default {
  getMangaList,
  getMangaById,
  getMangaByTitle,
  getMangaChapters,
  getMangaBySearch,
  getMangaListSort,
};
// http://localhost:1337/api/manga-lists?filters[categories][$containsi]=شونين
// http://localhost:1337/api/manga-lists?filters[$or][0][categories][$containsi]=شونين&filters[$or][1][categories][$containsi]=كوميدي
// http://localhost:1337/api/manga-lists?filters[$or][0][categories][$containsi]=${شونين}&filters[$or][1][categories][$containsi]=${كوميدي}&filters[color][$eq]=${ملون}&filters[type][$eq]=${مانهوا}
