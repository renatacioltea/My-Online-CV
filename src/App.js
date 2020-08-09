import React from "react";

import Nav from "./components/nav";
import Footer from "./components/footer";

import Home from "./components/home";
import Contact from "./components/contact";
import Projects from "./components/projects";
import MyResume from "./components/myResume";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Nav></Nav>

          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/myResume">
              <MyResume />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/projects">
              <Projects />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
