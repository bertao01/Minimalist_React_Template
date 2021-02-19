import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Main from '../pages/Main'
import Login from '../pages/Login'
import Dashboard from '../pages/Dashboard'
import About from '../pages/About'
import Donate from '../pages/Donate'
import Contact from '../pages/Contact'
import Register from '../pages/Register'
import Posts from '../pages/Posts'

// This site has 3 pages, all of which are rendered
// dynamically in the browser (not server rendered).
//
// Although the page does not ever refresh, notice how
// React Router keeps the URL up to date as you navigate
// through the site. This preserves the browser history,
// making sure things like the back button and bookmarks
// work properly.

export default function Routes() {
  return (
    <>
       <Switch>
          <Route exact path="/">
            <Main />
          </Route>
          <Route path="/posts">
            <Posts />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/Donate">
            <Donate/>
          </Route>
          <Route path="/Contact">
            <Contact/>
          </Route>
        </Switch>
    </>
  );
}
