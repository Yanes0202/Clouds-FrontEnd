import HomePage from "./components/pages/homePage/HomePage";
import Layout from "./components/layouts/Layout";
import CreatePost from "./components/pages/createPost/CreatePost";
import Profile from "./components/pages/profile/Profile";
import Chats from "./components/pages/chats/Chats";
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";

import React from "react";



export default function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/post/create">
          <CreatePost />
        </Route>
        <Route path="/profile">
          <Profile />
        </Route>
        <Route path="/chats">
          <Chats />
        </Route>
      </Switch>
    </Layout>
  );
}
