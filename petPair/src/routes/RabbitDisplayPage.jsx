import RabbitCard from "../components/rabbitDisplay/RabbitCard";
import rabbitData from '../rabbits.json'
import React, { useState, useEffect } from 'react';
import './RabbitDisplayPage.css'
import SearchIcon from '../assets/images/search.svg'
import SortIcon from '../assets/images/filter-left.svg'


const RabbitDisplayPage = ()=>{
    const [rabbits, setRabbits] = useState([]);
    const [filteredNumbers, setFilteredNumbers]= useState(0);
    useEffect(()=>{
        setRabbits(rabbitData.rabbits)
        setFilteredNumbers(rabbitData.rabbits.length)
    },[])
    console.log(rabbits)
    return (
        <div className="display-page-container">  
            {/* seacrh bar */}
            <div className="search-bar">
                <input type="text" placeholder="Search"/>
                <button>
                    <img src={SearchIcon} alt="" />
                </button>
            </div>

            <div className="sort-part">
                <div>
                    <img src={SortIcon} alt="" className="sort-icon"/>
                    <span>Sort by</span>
                </div>

                <p>{filteredNumbers} results</p>
            </div>




            <div className="display-body">
                {
                    rabbits.map(rabbit=>(
                        <RabbitCard key={rabbit.id} rabbit={rabbit}/>
                    ))
                }
                
            </div>
        </div>

    )
}

export default RabbitDisplayPage