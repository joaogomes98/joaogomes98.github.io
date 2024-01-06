import React from 'react';
import "../../styles/Research.css";
import { VscOrganization } from "react-icons/vsc";
import { VscNotebook } from "react-icons/vsc";
import { VscVm } from "react-icons/vsc";

function Research() {
  return (
    <div className="Research">
        <div className = "separator">
            <hr className="line" />
            <h2>User Research</h2>
            <hr className="line" />
        </div>
        <div className="content">
            <div className="section">
                <h3>Stakeholders</h3>
                <p>After some debate, our group identified the target users as people looking to launch and participate in a project, 
                    in the IT sector. Therefore, we mainly interviewed IT students and people who 
                     were learning to code or were collaborating in a project in their spare time.</p>
            </div>
            <div className = "user-needs">
                <h3>User needs</h3>
                <div className="needs">
                    <div className="needs-card">
                        <VscOrganization style={{fontSize: "5em"}}/>
                        <span>Matching</span>
                        <div className="card-description">
                            <p>Some users, mainly the less experienced, were more keen on a more informal collaboration.</p>
                        </div>
                    </div>
                    <div className="needs-card">
                        <VscNotebook style={{fontSize: "5em"}}/>
                        <span>Themes</span>
                        <div className="card-description">
                            <p>The theme of the project is very important and something to filter by.</p>
                        </div>
                    </div>
                    <div className="needs-card">
                        <VscVm style={{fontSize: "5em"}}/>
                        <span>Technology</span>
                        <div className="card-description">
                            <p>Hard to find projects based on the technology used.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className = "personas">
                <h3>Personas</h3>
                <div className="list">
                    <div className="persona">
                        <div className="persona-info">
                            <div className="header">
                                <h5>Carlos</h5>
                                <span><em>“Hmmm, where should I start…”</em></span>
                            </div>
                            <p><b>Bio:</b> 17 years old, highschool student, portuguese</p>
                            <p><b>Attitude:</b> Has a passion for computer games, wants to learn how to make them</p>
                            <p><b>Behavior:</b> Uses his PC a lot for gaming, schoolwork and talking to friends. 
                            Has done some small programming, but wants something bigger</p>
                        </div>
                        <div className="photo-cover"></div>
                    </div>
                    <div className="persona">
                        <div className="persona-info">
                            <div className="header">
                                <h5>Francisco</h5>
                                <span><em>“My head is bursting with ideas!”</em></span>
                            </div>
                            <p><b>Bio:</b> 30 years old, software engineer, portuguese</p>
                            <p><b>Attitude:</b> Always up to date with the latest trends and constantly coming up with new ideas</p>
                            <p><b>Behavior:</b> Uses smartphone and PC to do his research and keep up with the IT world. 
                            Wants to find people who can develop his project ideas</p>
                        </div>
                        <div className="photo-cover"></div>
                    </div>
                    <div className="persona">
                        <div className="persona-info">
                            <div className="header">
                                <h5>Rita</h5>
                                <span><em>“I should think about doing something...”</em></span>
                            </div>
                            <p><b>Bio:</b> 20 years old, university student, portuguese</p>
                            <p><b>Attitude:</b> She is outgoing and likes the frontend aspect of software development</p>
                            <p><b>Behavior:</b> Uses her laptop for college work and some research of her own. 
                            Wants to put her skills to the test with a more complex project</p>
                        </div>
                        <div className="photo-cover"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Research;