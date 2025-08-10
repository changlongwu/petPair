import RabbitCard from "../components/rabbitDisplay/RabbitCard";
import rabbitData from '../rabbits.json'
import React, { useState, useEffect } from 'react';
import './RabbitDisplayPage.css'

const RabbitDisplayPage = ()=>{
    const [rabbits, setRabbits] = useState([]);
    useEffect(()=>{
        setRabbits(rabbitData.rabbits)
    },[])
    console.log(rabbits)
    return (
        <div className="display-body">
            {
                rabbits.map(rabbit=>(
                    <RabbitCard key={rabbit.id} rabbit={rabbit}/>
                ))
            }
            
        </div>
    )
}

export default RabbitDisplayPage