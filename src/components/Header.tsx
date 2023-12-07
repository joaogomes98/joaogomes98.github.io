import React from 'react';
import '../styles/Header.css';

function Header() {
  return (
    <div className="Header">
        <div className="header-container">
            <div className="header-name">
                <span>João Gomes</span>
            </div>
            <div className="header-tabs">
                <span>About</span>
                <span>Projects</span>
                <span>Contacts</span>
            </div>
        </div>
    </div>
  );
}

export default Header;