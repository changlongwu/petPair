import { useParams } from 'react-router-dom';
import rabbitData from '../../rabbits.json';
import { useState,useEffect } from 'react';

const TalkWithRabbit = ({rabbitId ,hunger,toilet,hapiness,feeditem }) => {
    const [foodPreference, setFoodPreference] = useState(null)
    const [response, setResponse] = useState(""); // 用来存 API 返回
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        const rabbit = rabbitData.rabbits.find(r=>r.card_page.id === rabbitId);
        if (rabbit){
            setFoodPreference(rabbit.simulation_page.foodPreference);
        }
    },[rabbitId])

    useEffect(() => {
        const callAPI = async () => {
          try {
            const res = await fetch(
              'https://noggin.rea.gent/sophisticated-trout-2578',
              {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                  Authorization: 'Bearer rg_v1_h4oeuyeev0griee7f0a133mf4pn5nhnojqds_ngk',
                },
                body: JSON.stringify({
                  foodPreference: foodPreference || "",
                  hunger: hunger || "",
                  hapiness: hapiness || "",
                  toilet: toilet || "",
                  feeditem: feeditem || "",
                }),
              }
            );
    
            const text = await res.text();
            setResponse(text);
          } catch (err) {
            setResponse("Error: " + err.message);
          } finally {
            setLoading(false);
          }
        };    callAPI();
    }, [foodPreference, hunger, toilet, hapiness, feeditem]);
    
    return (
        
        
        <div>
                  {loading ? <p> </p> : <p>{response}</p>}
        </div>
    )
}

export default TalkWithRabbit;