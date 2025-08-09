import React from "react";
import './Welcome.css'
import welcomeDogImg from '../../assets/images/WelcomePage/welclomeDog.png'
const Welcome = ()=>{
    return (
        <div className="welcome-container">

            <img className='welcome-image' src={welcomeDogImg} alt="" />

            <div className="welcome-header">Welcome to Pet Pair Play.</div>
            
            <div className="circle-arrow"></div>

        </div>
    )
}

export default Welcome