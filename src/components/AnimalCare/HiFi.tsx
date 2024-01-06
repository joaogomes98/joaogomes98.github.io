import React from 'react';
import "../../styles/HiFi.css";

function HiFi() {

    const imageUrls = [
      'images/placeholder.svg',
      'images/placeholder.svg',
      'images/placeholder.svg'
    ];

  return (
    <div className="HiFi">
        <div className = "separator">
            <hr className="line" />
            <h2>Hi-fi prototype</h2>
            <hr className="line" />
        </div>
        <div className="content">
          <div className="gallery-section">
            {imageUrls.map((imageUrl, index) => (
              <img key={index} src={imageUrl} alt={`Gallery ${index + 1}`} className="gallery-image" />
            ))}
          </div>
          <div className="section">
              <h3>User testing</h3>
              <p>For the testing of our High-Fidelity Prototype, we conducted moderated tests with six users, through video conference.
                Users were asked to perform various tasks: register on the platform, create a project with specific features, 
                find a project with certain features and ask to collaborate, accept a request to collaborate, find the current and previous projects. 
                The prototype can be viewed here.</p>
          </div>
          <div className="section">
              <h3>Metrics</h3>
              <p>In terms of metrics, we evaluated the users performance through: 
                efficiency (time to complete the task and number of errors), effectiveness (number of successful tasks) 
                and satisfaction (how difficult it was to perform a task). After completing the tasks, we asked users 
                to fill a System Usability Scale and AttrakDiff questionnaires.</p>
          </div>
          <div className="section">
              <h3>Results</h3>
              <p>Some of the changes that needed to be made were: change some buttons layouts, removing templates which users found confusing and complicated, 
                change unclear buttons, and add an arrow to the profile page to indicate the possibility of scrolling down.</p>
          </div>
        </div>
    </div>
  );
}

export default HiFi;