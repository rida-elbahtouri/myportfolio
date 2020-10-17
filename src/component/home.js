import React from 'react'
import '../assets/style/home.css'
import bg from '../assets/images/bg.png'
const Home=()=> {
    return (
        <div className="home">
            <img className="bg" src={bg} />
            <h1 className="Myname">Hi, I'm Rida.</h1>
            <h1 className="smldesc">I'm a FullStack Web developer 
                I am passionate about coding
                and creating remarkable web apps.</h1>

                <p className="contact">Feel free to check my previous projects and if you are interested and want to work with me, feel free to contact me. </p>
        </div>
    )
}
export default Home