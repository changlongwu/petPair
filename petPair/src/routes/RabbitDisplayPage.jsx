import RabbitCard from "../components/rabbitDisplay/RabbitCard";
import rabbitData from '../rabbits.json'
import React, { useState, useEffect } from 'react';
import './RabbitDisplayPage.css'
import SearchIcon from '../assets/images/search.svg'
import SortIcon from '../assets/images/filter-left.svg'
import { Link } from "react-router-dom";

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
                <button className="sort-button">
                    <img src={SortIcon} alt="" className="sort-icon"/>
                    <span>Sort by</span>
                </button>

                <p>{filteredNumbers} results</p>
            </div>




            <div className="display-body">
                {   
                    rabbits.map(rabbit=>(
                        
                        <Link to={`/display/detail/${rabbit.card_page.id}` } key={rabbit.id} className="rabbit-link">
                            <RabbitCard key={rabbit.card_page.id} rabbit={rabbit}/>
                        </Link>
                        
                    ))
                }
                
            </div>
        </div>

    )
}

export default RabbitDisplayPage