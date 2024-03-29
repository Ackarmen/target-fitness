const apiKey = import.meta.env.VITE_RAPID_API_KEY;

export const exerciseOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": apiKey,
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
  },
};

export const youtubeOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": apiKey,
    "X-RapidAPI-Host": "youtube-search-and-download.p.rapidapi.com",
  },
};

export async function fetchData(url, options) {
  const response = await fetch(url, options);
  const data = await response.json();

  return data;
}
