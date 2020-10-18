import React from 'react'
import ButtmNav from './bottomNav'
import '../assets/style/skills.css'
export default function skills() {
    return (
        <div className="skills container">
            <div className="aboutme">
                <div className="small-resume">
                <h2>About me</h2>
                <p>
                hi,I’m Rida El bahtouri I'm a Full-stack developer and I'm passionate about creating and developing new web apps,
                I like programming and I enjoy solving tricky problems. As a full-stack web developer,
                I am continuing to learn new programming languages and frameworks, 
                and I also enjoy learning about new things like Game developments or Machine learning.</p>
                </div>
                <div className="skills-section">
                    <div className="table">
                    <div className="firstrow">
                        <h1>Front-end</h1>
                    <ul>
                        <li>Html5</li>
                        <li>Css3</li>
                        <li>JavaScript</li>
                        <li>Bootstrap4</li>
                        <li>ReactJS</li>
                        <li>ReduxJs</li>
                    </ul>
                </div>
                <div>
                        <h1>Back-end</h1>
                    <ul>
                        <li>Ruby</li>
                        <li>Rails</li>
                        <li>PostgreSql</li>
                        <li>Python3</li>
                        <li>Django</li>
                    </ul>
                </div>
                    </div>

                    <div className="work-flow">
                    <h1>Work skills</h1>
                    <ul>
                    <li> Git</li>
                    <li> GitHub</li>
                    <li> Heroku</li>
                    <li> Netlify</li>
                    <li> Mobile/Responsive Development</li>
                    <li>  RSpec</li>
                    <li> TDD</li>
                    <li> Chrome Dev Tools</li>
                    <li>Jest</li>
                    <li>Capybara</li>
                    </ul>
                    </div>
                </div>      
            </div> 
            <ButtmNav linkid={'skills'} />
        </div>
    )
}
