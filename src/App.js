import React, { useEffect, useState } from "react";
import "./App.css";
import "./Props.css";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";

import Post from "./comps/Post";
import Header from "./comps/Header";
import HomePage from "./comps/Home";
import Footer from "./comps/Footer";
import PostAdForm from "./comps/PostAdForm";
import LoginForm from "./comps/LoginForm";

import UploadImage from "./comps/UploadImage";
import DropDown from "./comps/DropDown";

import AdPage from "./comps/modal/AdPage";
import CategoryPage from "./comps/CategoryPage";

function App() {
  return (
    <BrowserRouter>
      {/* <Header /> */}

      <Route exact path="/" component={Header} />
      <Route exact path="/" component={HomePage} />
      <Route exact path="/" component={Footer} />
      <Route exact path="/post" component={Post} />
      <Route path="/post/postyourad" component={PostAdForm} />
      <Route exact path="/upload" component={UploadImage} />
      <Route exact path="/account/signin" component={LoginForm} />
      <Route exact path="/dropdown" component={DropDown} />
      <Route exact path="/adpage" component={AdPage} />
      <Route path="/category/" component={CategoryPage} />

      {/* <Footer /> */}
    </BrowserRouter>
  );
}

export default App;
