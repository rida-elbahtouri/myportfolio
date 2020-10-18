import React from 'react'
import ButtmNav from './bottomNav'
import '../assets/style/skills.css'
export default function skills() {
    return (
        <div className="skills container">
            <div className="aboutme">
                <div>
                <h2>About me</h2>
                <p>
                hi,I’m Rida El bahtouri I'm a Full-stack developer and I'm passionate about creating and developing new web apps,
                I like programming and I enjoy solving tricky problems. As a full-stack web developer,
                I am continuing to learn new programming languages and frameworks, 
                and I also enjoy learning about new things like Game developments or Machine learning.</p>
                </div>
                <div className="skills-section">
                    
                </div>      
            </div> 
            <ButtmNav linkid={'skills'} />
        </div>
    )
}
