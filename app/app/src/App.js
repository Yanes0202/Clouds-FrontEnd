import Main from "./components/MainContent/Main";

import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";

import React from "react";

import Layout from "./components/layouts/Layout";
import CreatePost from "./components/MainContent/Post/CreatePost";

export default function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <Main />
        </Route>
        <Route path="/post/create">
          <CreatePost />
        </Route>
      </Switch>
    </Layout>
  );
}
