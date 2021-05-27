import React from "react";
// import { Counter } from "./features/counter/Counter";
import "./App.css";

import Header from "./features/header";
import Nav from "./features/nav";

function App() {
  return (
    <div className="App">
      <Nav />
      <Header />
      {/* <header className="App-header">
        <Counter />        
      </header> */}
    </div>
  );
}

export default App;
