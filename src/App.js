import React from "react";
import Main from "./components/Main";
import Nav from "./components/Nav";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import "./styles/AppStyle.css"

function App() {
  return (
    <div className="App">
      <Nav />
      <Main />
      <Projects />
      <Skills />
    </div>
  );
}

export default App;
