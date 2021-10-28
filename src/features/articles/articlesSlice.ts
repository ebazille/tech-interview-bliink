import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { fetchHeadlines } from "./fetchArticles";

type ArticleSource = {
  id: string | null;
  name: string;
};

type Article = {
  source: ArticleSource;
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
};

type ArticlesState = {
  status: "loading" | "idle";
  error: string | null;
  list: Article[];
};

const initialState = {
  list: [],
  error: null,
  status: "idle",
} as ArticlesState;

export const articlesSlice = createSlice({
  name: "articles",
  initialState,

  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchHeadlines.pending, (state) => {
      state.status = "loading";
      state.error = null;
    });

    builder.addCase(fetchHeadlines.fulfilled, (state, { payload }) => {
      state.list = payload.map((article) => {
        return {
          ...article,
          title: article.title
            .split("-")
            .slice(0, -1)
            .reduce((prev, curr) => prev + curr),
        };
      });
      state.status = "idle";
    });

    builder.addCase(fetchHeadlines.rejected, (state, { payload }) => {
      if (payload) state.error = payload.message;
      state.status = "idle";
    });
  },
});

export default articlesSlice.reducer;

export const selectArticles = (state: RootState) => state.articles.list;

export const selectStatus = (state: RootState) => state.articles.status;
