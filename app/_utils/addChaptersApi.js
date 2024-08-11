const { default: axiosClient } = require("./axiosClient");
const token = localStorage.getItem("token");
export async function addChapterToManga(newChapter, mangaID) {
  try {
    const response = await axiosClient.get(
      `/manga-lists/${mangaID}?&populate[cover]=*&populate[chapters][populate][pages][sort][name]=asc`,
      {
        headers: {
          Authorization: `Bearer ${token}`, // Add the token to the Authorization header
        },
      }
    );

    const mangaData = response.data;
    const updatedChapters = [...mangaData.data.attributes.chapters, newChapter];
    const updateResponse = await axiosClient.put(
      `manga-lists/${mangaID}?&populate[cover]=*&populate[chapters][populate][pages][sort][name]=asc`,
      {
        data: {
          chapters: updatedChapters,
        },
      },
      {
        headers: {
          Authorization: `Bearer ${token}`, // Add the token to the Authorization header
        },
      }
    );
    console.log("Updated Manga Data:", updateResponse.data);
    return updateResponse.data;
  } catch (error) {
    console.error("Error:", error.message);
    throw error;
  }
}
