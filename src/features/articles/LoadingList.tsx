import ArticleCard from "./ArticleCard";
import styles from "./Articles.module.css";
import { loadingArticle } from "../../constants";

function LoadingList() {
  return (
    <div className={styles.wrapper}>
      {[...Array(10)].map((_, i) => (
        <ArticleCard article={loadingArticle} key={i} />
      ))}
    </div>
  );
}

export default LoadingList;
