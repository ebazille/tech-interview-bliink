import ArticleCard from "./ArticleCard";
import { Article } from "./types";
import styles from "./Articles.module.css";

interface ArticleListProps {
  articles: Article[];
}

function ArticleList({ articles }: ArticleListProps) {
  return (
    <div className={styles.wrapper}>
      {articles.map((article, index) => (
        <ArticleCard article={article} key={index}/>
      ))}
    </div>
  );
}

export default ArticleList;
