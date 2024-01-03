import React from 'react';
import '../styles/Header.css';
import { scrollTo } from '../scripts/utils';

function Header() {
  return (
    <div className="Header">
        <div className="header-container">
            <div className="header-name">
                <span>João Gomes</span>
            </div>
            <div className="header-tabs">
                <span onClick={() => scrollTo('about-section', 2000)}>About</span>
                <span onClick={() => scrollTo('projects-section', 2000)}>Projects</span>
                <span>Contacts</span>
            </div>
        </div>
    </div>
  );
}

export default Header;