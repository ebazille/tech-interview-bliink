import { Article, Category } from "./features/articles/types";

export const apiKey: string = "b38d710c3a504c9cb862f6f0685feaec";

export const categoryFilters: { label: string; value: Category }[] = [
  { label: "General", value: "general" },
  { label: "Business", value: "business" },
  { label: "Entertainment", value: "entertainment" },
  { label: "Health", value: "health" },
  { label: "Science", value: "science" },
  { label: "Sports", value: "sports" },
  { label: "Technology", value: "technology" },
];

export const loadingArticle: Article = {
  author: "",
  title: "Loading...-",
  source: {
    id: null,
    name: "",
  },
  description: "...",
  url: "",
  urlToImage: "",
  publishedAt: "2021-10-27T21:27:16Z",
  content: "",
};
