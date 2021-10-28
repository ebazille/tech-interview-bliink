import { Article } from "./types";
import styles from "./Articles.module.css";
import { Link } from "react-router-dom";

interface ArticleCardProps {
  article: Article;
}

function ArticleCard({ article }: ArticleCardProps) {
  return (
    article && (
      <div className={styles.card}>
        <Link
          className={styles.link}
          to={{ pathname: "/article", state: { article: article } }}
        >
          <div className={styles.image}>
            <img src={article.urlToImage} alt="Orange" />
          </div>
          <div className={styles.body}>
            <div className={styles.title}>
              <h3>{article.title}</h3>
            </div>
            <div className={styles.description}>
              <p>{article.description}</p>
            </div>
          </div>
          <div className={styles.footer}>
            <div className={styles.source}>
              <time>{article.source.name}</time>
            </div>
            <div className={styles.date}>
              <time>
                {new Date(article.publishedAt).toLocaleDateString("fr-fr", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>
            </div>
          </div>
        </Link>
      </div>
    )
  );
}

export default ArticleCard;
