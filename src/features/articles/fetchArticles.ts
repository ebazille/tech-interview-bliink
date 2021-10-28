import { createAsyncThunk } from "@reduxjs/toolkit";
import { apiKey } from "../../constants";
import { Article } from "./types";

type FetchArticlesError = {
  message: string;
};

export const fetchHeadlines = createAsyncThunk<
  Article[],
  string,
  { rejectValue: FetchArticlesError }
>(
  "articles/fetchHeadlines",

  async (category: string, thunkApi) => {
    const response: Response = await fetch(
      `https://newsapi.org/v2/top-headlines?country=fr&category=${category}&apiKey=${apiKey}`
    );

    if (response.status !== 200) {
      return thunkApi.rejectWithValue({
        message: "Failed to fetch articles.",
      });
    }

    const data: { status: string; totalResults: number; articles: Article[] } =
      await response.json();

    return data.articles;
  }
);
