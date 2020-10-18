import React from 'react'
import '../assets/style/home.css'
import ButtmNav from './bottomNav'
import github from '../assets/images/icons/github-logo.svg'
import gmail from '../assets/images/icons/gmail.svg'
import linkedin from '../assets/images/icons/linkedin.svg'
import twitter from '../assets/images/icons/twitter.svg'
const Home=()=> {
    return (
        <div className="home container">
            <h1 className="Myname">Hi, I'm Rida.</h1>
            <h1 className="smldesc">I'm a FullStack Web developer 
                I am passionate about coding
                and creating remarkable web apps.</h1>

                <p className="contact">Feel free to check my previous projects and if you are interested and want to work with me, feel free to contact me. </p>
                <div className="icons">
                    <a target="_blank" href="https://github.com/rida-elbahtouri"> <img src={github} alt='github' /></a>
                    <a target="_blank" href="elbahtouri0123@gmail.com">  <img src={gmail} alt='gmail' /></a>
                    <a target="_blank" href="https://twitter.com/RElbahtouri"> <img src={twitter} alt='twitter' /></a>
                    <a target="_blank" href="https://www.linkedin.com/in/rida-elbahtouri/"> <img src={linkedin} alt='linkedin' /></a>
                    </div>
                <ButtmNav linkid={'home'} />
        </div>
    )
}
export default Home