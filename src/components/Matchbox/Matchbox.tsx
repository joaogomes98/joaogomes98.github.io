import React from 'react';
import "../../styles/Matchbox.css";
import Header from "../Header";
import Summary from './Summary';
import Research from './Research';
import { VscFoldDown } from "react-icons/vsc";
import { VscArrowSmallLeft } from "react-icons/vsc";

function Matchbox() {
  return (
    <div className="Matchbox">

      <Header />

      <div className="landing-section">
        <div className="banner">
          <div className="button" id="primary">
            <VscArrowSmallLeft style={{ fontSize: '2em'}}/>
            To the main page
          </div>
        </div>
        <div className="title">
            <h1>Matchbox</h1>
            <h4>A web-based platform for project making that matches people and ideas.</h4>
        </div>
        <div className="see-project">
          <span><b>See the project</b></span>
          <div className="chevron-container">
            <VscFoldDown style={{ fontSize: '1.5em' }}/>
          </div>
        </div>
      </div>

      <Summary />

      <Research />

    </div>
  );
}

export default Matchbox;