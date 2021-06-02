import React from "react";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";

// import BasicMap from "./features/maps/BasicMap";

import Nav from "./features/nav";
import Footer from "./features/footer";
import Welcome from "./pages/Welcome";
import NotFound from "./pages/NotFound";
import Project from "./pages/Project";

function App() {
  return (
    <div className="App">
      <Nav />
      <Router>
        <Switch>
          <Route path="/project/:id/*">
            <Project />
          </Route>
          <Route exact path="/">
            <Welcome />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Router>
      {/* <div className="map">
          <BasicMap />
        </div> */}
      <Footer />
    </div>
  );
}

export default App;
