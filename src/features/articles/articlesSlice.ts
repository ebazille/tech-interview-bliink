import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { fetchArticles } from "./fetchArticles";

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

  reducers: {
    // addArticle(state: ArticlesState, action: PayloadAction<Article>) {
    //   state.list.push(action.payload);
    // },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchArticles.pending, (state) => {
      state.status = "loading";
      state.error = null;
    });

    builder.addCase(fetchArticles.fulfilled, (state, { payload }) => {
      state.list = payload;
      state.status = "idle";
    });

    builder.addCase(fetchArticles.rejected, (state, { payload }) => {
      if (payload) state.error = payload.message;
      state.status = "idle";
    });
  },
});

// export const { addArticle } = articlesSlice.actions;

export default articlesSlice.reducer;

export const selectArticles = (state: RootState) => state.articles.list;

export const selectStatus = (state: RootState) => state.articles.status;
