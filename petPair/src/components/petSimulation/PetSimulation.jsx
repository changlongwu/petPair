import React, { useEffect, useState } from "react";
import './PetSimulation.css'
import LeftArrow from "../LeftArrow.jsx";
import RabbitData from '../../rabbits.json';
import { useParams } from "react-router-dom";
import HeartIcon from '../../assets/images/heart.svg'
import FilledHeartIcon from '../../assets/images/heart-fill.png'
import Clock from "../Clock.jsx";
import grassImage from '../../assets/images/PetSimulationImage/grass.png';
import carrotImage from '../../assets/images/PetSimulationImage/carrot.png';
import grass2Image from '../../assets/images/PetSimulationImage/grass2.png';
import pelletsImage from '../../assets/images/PetSimulationImage/pellets.png';
import toyImage from '../../assets/images/PetSimulationImage/toy.png';
import rabbitImage from '../../assets/images/PetSimulationImage/rabbit1.png';
import rabbitEatingImage from '../../assets/images/PetSimulationImage/rabbit-eating.png';
import happyRabbitImage from '../../assets/images/PetSimulationImage/happy.png';
import toiletImage from '../../assets/images/PetSimulationImage/toilet.png'
import bananaImage from '../../assets/images/PetSimulationImage/banana.png'

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
                            <img src={HeartIcon} alt="" />
                        </div>
                        <div className="heart-description">
                            <p>Earn 3 hearts to graduate</p>
                        </div>
                        
                    </div>
                </div>

                <div className="instruction-contianer">
                    <p className="instruction">click on each item to learn more</p>
                    <Clock/>
                </div>

                <div className="draggable-area">
                    {/* <img src={grassImage} alt="" />
                    <img src={toyImage} alt="" /> */}
                    <img src={toiletImage} alt="" className="toilet-img"/>
                    <img src={rabbitImage} alt="" className="rabbit-img" />
                    <img src={pelletsImage} alt="" className="pelltes-img"/>
                    <img src={toyImage} alt="" className="toy-img"/>
                    <img src={bananaImage} alt=""  className="banana-img"/>
                    <img src={carrotImage} alt="" className="carrot-img" />
                    <img src={grassImage} alt="" className="grass-img"/>
                    <img src={grass2Image} alt="" className="grass2-img"/>
                </div>
                
            
            </div>
        </div>

    )
}

export default PetSimulation