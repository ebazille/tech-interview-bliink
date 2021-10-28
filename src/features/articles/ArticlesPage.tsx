import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useTypedSelector } from "../../app/store";
import { fetchHeadlines } from "./fetchArticles";
import { selectStatus, selectArticles } from "./articlesSlice";
import ArticleList from "./ArticleList";
import styles from "./Articles.module.css";
import { Category } from "./types";
import LoadingList from "./LoadingList";
import { categoryFilters } from "../../constants";

function Articles() {
  const [category, setCategory] = useState<Category>("general");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchHeadlines(category));
  }, [dispatch, category]);

  const articles = useTypedSelector(selectArticles);

  const status = useTypedSelector(selectStatus);

  const handleClickOnCategory = (value: Category) => {
    dispatch(fetchHeadlines(value));
    setCategory(value);
  };

  return (
    <div>
      <div className={styles.blurry}>
        <header>
          <div className={styles.title}>
            <span className={styles.name}>bliink news</span>
          </div>
        </header>
      </div>
      <div className={styles.categories}>
        {categoryFilters.map((filter) => (
          <button
            className={styles.categoryButton}
            value={filter.value}
            key={filter.value}
            style={{
              background:
                category === filter.value
                  ? "linear-gradient(120deg, #d50984 0%, #ff6000 80%)"
                  : "white",
            }}
            onClick={() => handleClickOnCategory(filter.value)}
          >
            {filter.label}
          </button>
        ))}
      </div>
      {status === "loading" ? (
        <LoadingList />
      ) : (
        <ArticleList articles={articles} />
      )}
    </div>
  );
}

export default Articles;
