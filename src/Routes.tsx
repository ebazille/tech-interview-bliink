import { Route, Switch, Redirect } from "react-router-dom";
import ArticlePage from "./features/article/ArticlePage";
import ArticlesPage from "./features/articles/ArticlesPage";

function Routes() {
  return (
    <Switch>
      <Route exact path="/">
        <Redirect to="/home" />
      </Route>
      <Route path="/home" render={() => <ArticlesPage />} />
      <Route path="/article" render={() => <ArticlePage />} />
    </Switch>
  );
}

export default Routes;
