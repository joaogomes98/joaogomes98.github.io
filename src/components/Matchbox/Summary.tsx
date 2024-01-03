import React from 'react';
import "../../styles/Summary.css";

function Summary() {
  return (
    <div className="Summary">
        <div className = "separator">
            <hr className="line" />
            <h2>Summary</h2>
            <hr className="line" />
        </div>
        <div className="content">
            <div className="section">
                <h3>Description</h3>
                <p>Matchbox is a web-based platform for project making that matches people and ideas. 
                It was a group project made for the User Centered Design course.</p>
            </div>
            <div className="section">
                <h3>Duration</h3>
                <p>4 months.</p>
            </div>
            <div className="section">
                <h3>Role in project</h3>
                <p>Project manager, UX/UI designer.</p>
            </div>
            <div className="section">
                <h3>The problem</h3>
                <p>Create a simple and unique way of connecting people with the same idea for a project.</p>
            </div>
        </div>
    </div>
  );
}

export default Summary;