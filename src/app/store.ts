import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useSelector } from "react-redux";
import articlesReducer from "../features/articles/articlesSlice";

export const store = configureStore({
  reducer: {
    articles: articlesReducer,
  },
});

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;

export type RootState = ReturnType<typeof store.getState>;
