import React from 'react';
import "./App.css";
import About from "./components/About";
import Services from "./components/Services";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App">
      <h1> Git Branching/Merge Practice</h1>
      <p> Let's practice!</p>
      <About />
      <Services />
      <Contact />
    </div>
  );
}

export default App;
