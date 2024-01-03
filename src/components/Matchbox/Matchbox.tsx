import React from 'react';
import "../../styles/Matchbox.css";
import Header from "../Header";
import { VscChevronDown } from "react-icons/vsc";

function Matchbox() {
  return (
    <div className="Matchbox">
      <Header />
      <div className="landing-section">
        <div className="banner">
          <div className="button" id="primary">
            Voltar à página inicial
          </div>
        </div>
        <div className="title">
            <h1>Matchbox</h1>
            <h4>A web-based platform for project making that matches people and ideas.</h4>
        </div>
        <div className="see-project">
          <span><b>See the project</b></span>
          <div className="chevron-container">
            <VscChevronDown style={{ fontSize: '2em' }}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Matchbox;