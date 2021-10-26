import { Article } from "./types";
import styles from "./Articles.module.css";

interface ArticleCardProps {
  article: Article;
}

function ArticleCard({ article }: ArticleCardProps) {
  return (
    article && (
      <div className={styles.card}>
        <a href="https://www.damienflandrin.fr/blog/post/#">
          <div className={styles.image}>
            <img src={article.urlToImage} alt="Orange" />
          </div>

          <div className={styles.body}>
            <div className={styles.title}>
              <h3>
                {article.title
                  .split("-")
                  .slice(0, -1)
                  .reduce((prev, curr) => prev + curr)}
              </h3>
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
              <time>20 Novembre 1992</time>
            </div>
          </div>
        </a>
      </div>
    )
  );
}

export default ArticleCard;
