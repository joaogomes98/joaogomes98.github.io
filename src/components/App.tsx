import React from 'react';
import '../styles/App.css';
import Header from "./Header";
import About from "./About";
import Projects from "./Projects";

function App() {
  return (
    <div className="App">

      <Header />

      <div className="main-page-container">
        <div className="content">
          <div className="left-side">
            <div className="intro">
              <h1>“Pixels with Purpose, 
              <br />
              Experiences with Impact.”</h1>
              <span>This is the motto I live by.
              <br />
              Welcome to my portfolio page!</span>
            </div>
            <button className="pushable">
              <span className="shadow"></span>
              <span className="edge"></span>
              <span className="front">
                Explore
              </span>
            </button>
          </div>
        </div>
      </div>

      <About />

      <Projects />

    </div>
  );
}

export default App;
