import React from 'react';
import '../styles/Header.css';

function Header() {
  const scrollTo = (elementId: string, duration = 1000) => {
    const targetElement = document.getElementById(elementId);
    if (targetElement) {
      const targetPosition = targetElement.offsetTop;
      const startPosition = window.pageYOffset;
      const distance = targetPosition - startPosition;
      const startTime = performance.now();
  
      const scroll = (currentTime: number) => {
        const elapsedTime = currentTime - startTime;
        const progress = Math.min(elapsedTime / duration, 1);
        const easing = easeInOutQuad(progress);
        window.scroll(0, startPosition + distance * easing);
  
        if (elapsedTime < duration) {
          requestAnimationFrame(scroll);
        }
      };
  
      const easeInOutQuad = (t: number) => (t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t);
  
      requestAnimationFrame(scroll);
    }
  };

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