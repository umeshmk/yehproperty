// import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Nav from "./features/nav";
import Footer from "./features/footer";
import Welcome from "./pages/Welcome";
import NotFound from "./pages/NotFound";
import Property from "./pages/Property";
import Search from "./pages/Search";
import ScrollToTop from "./utility/ScrollToTop";

function App() {
  return (
    <div className="App">
      <Router basename="yehproperty">
        <ScrollToTop />
        <Nav />

        <Switch>
          <Route path="/project/:id/*">
            <Property type="project" />
          </Route>
          <Route path="/buy/:id/*">
            <Property type="buy" />
          </Route>
          <Route path="/rent/:id/*">
            <Property type="rent" />
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
