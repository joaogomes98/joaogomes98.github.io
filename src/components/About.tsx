import React from 'react';
import '../styles/About.css';

function About() {
  return (
    <div className="About" id="about-section">
        <div className="container">
            <div className="about-wrapper">
                <div className="about-me">
                    <h2>About me</h2>
                    <span>
                        As a junior UX/UI Designer rooted in Computer Science and Engineering, 
                        I blend analytical precision with design intuition to create user experiences 
                        that are both methodical and meaningfully simple.
                    </span>
                </div>
                <div className="more-about-me">
                    <h3>A little more about me</h3>
                    <span>I'm on a two-year adventure in the UX/UI design universe, currently navigating the exciting challenges at NOS SGPS. 
                        I've got this genuine fascination for AI, constantly finding joy in automating processes—it's like a creative dance between my engineering and design sides. 
                        Beyond pixels and wireframes, you'll spot me breaking a sweat at the gym or eagerly soaking up the newest tech trends. 
                        It's the perfect blend of work and play that keeps my curiosity alive!
                        If you want to know even more about me, check out my CV below.
                    </span>
                </div>
                <div className="button-wrapper">
                    <div className="button" id="primary">
                        <span>Contact me</span>
                    </div>
                    <div className="button" id="primary">
                        <span>See my CV</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default About;