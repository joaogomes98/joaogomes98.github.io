import React from 'react';
import "../../styles/LowFi.css";

function LowFi() {

  return (
    <div className="LowFi">
        <div className = "separator">
            <hr className="line" />
            <h2>Low-fi prototype</h2>
            <hr className="line" />
        </div>
        <div className="content">
          <div className="slideshow-section">
          </div>
            <div className="section">
                <h3>User testing</h3>
                <p>With the creation of a Low-Fidelity Prototype, the team was able to define and test, on a very basic level, 
                    three main aspects of the application: navigation, interaction and design. 
                    We conducted Wizard of Oz studies on four users and the relevant results we gathered were: 
                    the existence of unnecessary buttons, lack of clarity and confusing terminology, 
                    finding a specific project was time-consuming and different sections could be combined into one. 
                    The prototype can be viewed here.</p>
            </div>
        </div>
    </div>
  );
}

export default LowFi;