import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useTypedSelector } from "../../app/store";
import { fetchArticles } from "./fetchArticles";
import { selectStatus, selectArticles } from "./articlesSlice";
import ArticleList from "./ArticleList";

function Articles() {
  const [category, setCategory] = useState<string>("global");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchArticles(category));
  }, [dispatch]);

  const articles = useTypedSelector(selectArticles);

  const status = useTypedSelector(selectStatus);

  return (
    <>
      {status === "loading" ? (
        <div>loading...</div>
      ) : (
        <ArticleList articles={articles} />
      )}
    </>
  );
}

export default Articles;
