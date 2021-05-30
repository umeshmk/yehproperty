import React from "react";
import { ThemeProvider } from "styled-components";
import theme from "./theme/global";
import "./App.css";
import BasicMap from "./features/maps/BasicMap";

import Header from "./features/header";
import Nav from "./features/nav";
import Sections from "./features/sections/Sections";

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Nav />
        <Header />
        <Sections />
        {/* <div className="map">
          <BasicMap />
        </div> */}
      </ThemeProvider>
    </div>
  );
}

export default App;
