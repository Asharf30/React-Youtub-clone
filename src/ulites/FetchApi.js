import axios from "axios";

const BASE_URL = "https://youtube-v31.p.rapidapi.com";
const options = {
  params: {
    maxResults: "5",
  },
  headers: {
    "x-rapidapi-key": import.meta.env.VITE_KEY,
    "x-rapidapi-host": "youtube-v31.p.rapidapi.com",
    "Content-Type": "application/json",
  },
};

export const fetchFromAPI = async (url) => {
  const response = await axios.get(`${BASE_URL}/${url}`, options);
  return response.data;
};

