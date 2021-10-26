import { createAsyncThunk } from "@reduxjs/toolkit";
import { Article } from "./types";

type FetchArticlesError = {
  message: string;
};

export const fetchArticles = createAsyncThunk<Article[], string, { rejectValue: FetchArticlesError }>(
  "articles/fetch",

  async (category: string, thunkApi) => {
    const response = await fetch(
      category !== 'global'
        ? `https://newsapi.org/v2/top-headlines?country=fr&category=${category}&apiKey=a33d3209025c402087f8e4175e54053b`
        : "https://newsapi.org/v2/top-headlines?country=fr&apiKey=a33d3209025c402087f8e4175e54053b"
    );

    if (response.status !== 200) {
      return thunkApi.rejectWithValue({
        message: "Failed to fetch todos.",
      });
    }

    const data: { status: string; totalResults: number; articles: Article[] } =
      await response.json();

    return data.articles;
  }
);
