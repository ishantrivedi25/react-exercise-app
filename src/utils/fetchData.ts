import { FetchOptions } from "../types/apiTypes";

export const exerciseOptions: FetchOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
    "X-RapidAPI-Key": import.meta.env.VITE_RAPID_API_KEY,
  },
};

export const youtubeOptions: FetchOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Host": "youtube-search-and-download.p.rapidapi.com",
    "X-RapidAPI-Key": import.meta.env.VITE_RAPID_API_KEY,
  },
};

export const fetchData = async (url: string, options: FetchOptions = {}) => {
  try {
    const res = await fetch(url, options);

    if (!res.ok) {
      throw new Error(`Error: ${res?.statusText}`);
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Fetch error", error);
    throw error;
  }
};
