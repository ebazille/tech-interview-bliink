import { useLocation, useHistory } from "react-router-dom";
import { Article } from "../articles/types";
import styles from "./Article.module.css";

interface LocationState {
  article: Article;
}

function ArticlePage() {
  const location = useLocation<LocationState>();
  const history = useHistory();
  const article = location.state?.article;

  const HandleClickOnBackButton = () => {
    history.goBack();
  };

  return (
    <div className={styles.wrapper}>
      <header className={styles.banner}>
        <button
          className={styles.backButton}
          onClick={HandleClickOnBackButton}
        ></button>
        <img
          className={styles.background}
          src={article.urlToImage}
          alt="Orange"
        ></img>
        <h1>{article.title}</h1>
      </header>
      <main>
        <article>
          <h1>{article.title}</h1>
          <p>{article.description}</p>
          <p>{article.content}</p>
          <p>
            Article Complet: <a href={article.url}>{article.url}</a>
          </p>
          <div className={styles.publishDate}>
            {`Publié le: ${new Date(article.publishedAt).toLocaleDateString(
              "fr-fr",
              {
                year: "numeric",
                month: "long",
                day: "numeric",
              }
            )}`}
            {article.author && ` - ${article.author}`}
          </div>
        </article>
      </main>
    </div>
  );
}

export default ArticlePage;
