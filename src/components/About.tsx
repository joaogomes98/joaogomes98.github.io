import React from 'react';
import '../styles/About.css';

function About() {
  return (
    <div className="About">
        <div className="about-container">
            <div className="about-intro">
                <h2>About me</h2>
                <span>
                    As a junior UX/UI Designer rooted in Computer Science and Engineering, 
                    I blend analytical precision with design intuition to create user experiences 
                    that are both methodical and meaningfully simple.
                </span>
            </div>
            <div className="about-more-container">
                <div className="picture"></div>
                <div className="info-container">
                    <h3>A little more about me</h3>
                    <span>I'm on a two-year adventure in the UX/UI design universe, currently navigating the exciting challenges at NOS SGPS. 
                        I've got this genuine fascination for AI, constantly finding joy in automating processes—it's like a creative dance between my engineering and design sides. 
                        Beyond pixels and wireframes, you'll spot me breaking a sweat at the gym or eagerly soaking up the newest tech trends. 
                        It's the perfect blend of work and play that keeps my curiosity alive!
                        If you want to know even more about me, here is my CV.
                    </span>
                </div>
            </div>
        </div>
    </div>
  );
}

export default About;