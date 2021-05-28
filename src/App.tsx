import React from "react";
import { ThemeProvider } from "styled-components";
import theme from "./theme/global";
import "./App.css";

import Header from "./features/header";
import Nav from "./features/nav";

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Nav />
        {/* <Header /> */}
      </ThemeProvider>
    </div>
  );
}

export default App;
