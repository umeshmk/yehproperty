// import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Nav from "./features/nav";
import Footer from "./features/footer";
import Welcome from "./pages/Welcome";
import NotFound from "./pages/NotFound";
import Project from "./pages/Project";
import Search from "./pages/Search";

function App() {
  return (
    <div className="App">
      <Router basename="yehproperty">
        <Nav />

        <Switch>
          <Route path="/project/:id/*">
            <Project />
          </Route>
          <Route path="/search">
            <Search />
          </Route>
          <Route exact path="/">
            <Welcome />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
