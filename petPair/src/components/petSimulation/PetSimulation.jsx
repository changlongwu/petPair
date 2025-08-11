import React, { useEffect, useState } from "react";
import './PetSimulation.css'
import LeftArrow from "../LeftArrow.jsx";
import RabbitData from '../../rabbits.json';
import { useParams } from "react-router-dom";
import HeartIcon from '../../assets/images/heart.svg'
import FilledHeartIcon from '../../assets/images/heart-fill.png'
import Clock from "../Clock.jsx";
const PetSimulation = ()=>{
    const {id} = useParams();
    const [rabbit, setRabbit] = useState(null)


    useEffect(()=>{
        const foundRabbit = RabbitData.rabbits.find((r)=>r.details_page.id===id);
        if (foundRabbit){
            setRabbit(foundRabbit.details_page);
            console.log(rabbit);
        }
    },[])

    return (
        <div className="simulation-page">
             <LeftArrow/>
            <div className="simulation-container">
                
                <div className="rabbit-learning-progress">
                    <div className="simulation-rabbit-name"><p>{rabbit?.name}</p></div>
                    <div>
                        <div className="heart-icons">
                            <img src={HeartIcon} alt="" />
                            <img src={HeartIcon} alt="" />
                            <img src={FilledHeartIcon} alt="" />
                        </div>
                        <div className="heart-description">
                            <p>Earn 3 hearts to graduate</p>
                        </div>
                        
                    </div>
                </div>

                <div >

                </div>
                <Clock/>
            
            </div>
        </div>

    )
}

export default PetSimulation