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
            <div className="button" id="primary">
              <span>Explore</span>
            </div>
          </div>
        </div>
      </div>

      <About />

      <Projects />

    </div>
  );
}

export default App;
