import React, { useEffect } from 'react';
import "../../styles/AnimalCare.css";
import Header from "../Header";
import Summary from './Summary';
import Research from './Research';
import LowFi from './LowFi';
import HiFi from "./HiFi";
import Conclusions from './Conclusions';
import { VscFoldDown } from "react-icons/vsc";
import { VscArrowSmallLeft } from "react-icons/vsc";
import { useNavigate } from 'react-router-dom';

const AnimalCare: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);

  }, []); 

  const handleClick = (targetRoute: string) => {
    navigate(targetRoute);
  };

  return (
    <div className="AnimalCare">

      <Header />

      <div className="landing-section">
        <div className="banner">
          <div className="button" id="primary" onClick={() => handleClick('/')}>
            <VscArrowSmallLeft style={{ fontSize: '2em'}}/>
            To the main page
          </div>
        </div>
        <div className="title">
            <h1>AnimalCare</h1>
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

      <LowFi />

      <HiFi />

      <Conclusions />

    </div>
  );
}

export default AnimalCare;