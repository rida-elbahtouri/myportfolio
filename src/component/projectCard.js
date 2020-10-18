import React from 'react'
import github from '../assets/images/icons/github-logo.svg'
const ProjectCard=()=> {

    return (

        <div className="projectCard">
            <div>
                <img className="project-image"  src="https://i.ibb.co/qMk29jQ/smartmockups-ke137cac.png" alt="project1" />
            </div>
            <div className="information">
                <h2>Project Name</h2>
                <p className="techsUsed">Tech used : Css3,Html5,Rails,React</p>
                <p className="project-descr">
                it a social media app that will allow the user to signin and signup,follow friends , share his thought with them. and It allow user to search for other users by there full name or username.
                </p>
                <a className="repo" target="_blank" href="https://github.com/rida-elbahtouri"> <img src={github} alt='github' /></a>
            </div>
        </div>
    )
}
export default ProjectCard