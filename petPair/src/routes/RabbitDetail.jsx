import React, { useEffect, useState } from "react";
import './RabbitDetail.css'
import { useParams } from "react-router-dom";
import RabbitData from '../rabbits.json'
import DogLeashIcon from '../assets/images/dogLeash.svg'
import HeartIcon from '../assets/images/heart.svg'
import PlusSaveIcon from '../assets/images/plusMath.svg'
import LeftArrowIcon from '../assets/images/arrow-left.svg'
import { Link } from "react-router-dom";

const RabbitDetail = ()=>{
    const {id} = useParams();
    const [rabbit, setRabbit] = useState(null)
    const[rabbitBio, setRabbitBio] = useState('')

    const generateBiography = async (rabbit) => {
        const cardPage = rabbit.card_page;
        const detailsPage = rabbit.details_page;

        try {
    
          const response = await fetch("https://noggin.rea.gent/yodelling-cicada-2365", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer rg_v1_aeg1zrcmeiqa2iqm6th462nie3xakdoc1ck1_ngk",
            },
            body: JSON.stringify({
              trait1: detailsPage.personality_traits[1],
              trait2: detailsPage.personality_traits[2],
              species: cardPage.species,
              breed: cardPage.breed,
              name: cardPage.name,
              trait0: detailsPage.personality_traits[0],
            }),
          });
          return await response.text();
        } catch (error) {
          console.error("Error generating biography:", error);
          return "Biography information not available.";
        }
      };
    
    

    useEffect(()=>{
        const foundRabbit = RabbitData.rabbits.find((r)=>r.details_page.id===id);
        if (foundRabbit){
            setRabbit(foundRabbit.details_page);
            console.log(rabbit);
            (async () => {
                const bio = await generateBiography(foundRabbit);
                setRabbitBio(bio);
              })();
        }
        
        console.log(rabbitBio)
    },[])
    return (
        <div className="detail-page-container">
            <Link to={'/display'} key={'backToDisplay'} className="backToDisplay">
            <img src={LeftArrowIcon} alt="" className="go-back-arrow"/>
            </Link>

           <img src={rabbit?.image} alt="rabbit photo" className="detail-image"/>
            <div className="detail-header">
                <div className="rabbit-name"><p>{rabbit?.name}</p></div>
                <div className="detail-icons">

                    <Link to={`/display/simulation-instruction/${rabbit?.id}/${rabbit?.name}` } key={`simulation-${rabbit?.id}`}>
                    <div className="icon-items">
                        <img src={DogLeashIcon} alt="" />
                        <p>Learn</p>
                    </div>
                    </Link>
                    

                    <div className="icon-items">
                        <img src={HeartIcon} alt="" />
                        <p>205</p>
                    </div>

                    <div className="icon-items">
                        <img src={PlusSaveIcon} alt="" />
                        <p>Save</p>
                    </div>
                </div>
            </div>
            <div className="detail-body">
                <div className="detail-row">
                    <div className="detail-key">
                        <p>DISTANCE</p>
                    </div>
                    <div className="detail-value">
                        <p>{rabbit?.distance} miles away</p>
                    </div>
                </div>

                <div className="detail-row">
                    <div className="detail-key">
                        <p>GENDER</p>
                    </div>
                    <div className="detail-value">
                        <p>{rabbit?.sex}</p>
                    </div>
                </div>

                <div className="detail-row">
                    <div className="detail-key">
                        <p>BREED</p>
                    </div>
                    <div className="detail-value">
                        <p>{rabbit?.breed}</p>
                    </div>
                </div>

                <div className="detail-row">
                    <div className="detail-key">
                        <p>WEIGHT</p>
                    </div>
                    <div className="detail-value">
                        <p>{rabbit?.weight} lbs</p>
                    </div>
                </div>


                <div className="detail-row">
                    <div className="detail-key">
                        <p>AGE</p>
                    </div>
                    <div className="detail-value">
                        <p>{rabbit?.age} yrs</p>
                    </div>
                </div>


                <div className="detail-row">
                    <div className="detail-key">
                        <p>PRICE</p>
                    </div>
                    <div className="detail-value">
                        <p>${rabbit?.adoption_fee} adoption fee</p>
                    </div>
                </div>
                <div className="detail-row">
                    <div className="detail-key">
                        <p>LOCATION</p>
                    </div>
                    <div className="detail-value">
                        <p>{rabbit?.location}</p>
                    </div>
                </div>


                <div className="traits-container">
                {rabbit?.personality_traits?.map((trait, index) => (
                    <span key={index} className="trait-pill">
                    {trait}
                    </span>
                ))}
                </div>

                <div className="rabbit-bio">
                    <p>{rabbitBio}</p>
                </div>
        </div>
        </div>
        
    )
}

export default RabbitDetail;