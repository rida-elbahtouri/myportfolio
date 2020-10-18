import React from 'react'
const BottomNav=({linkid})=> {

    // const changeColor=(e,id)=>{

    //    if(id === e.target.id){
    //        e.target.parentElement.classList.add('clr')
    //    }
    // }

    //onClick={(e)=>changeColor(e,linkid)}
    return (
        <div className="navbar">
            <ul className="bottomnav"  >
                <li className="hmm "><span id="home">Home</span></li>
                <li className="hmm clr"><span id="skills">Skills</span></li>
                <li className="hmm"><span id="projects">Projects</span></li>
            </ul>
        </div>
    )
}
export default BottomNav