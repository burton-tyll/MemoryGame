import Counter from "./Counter";
import { useEffect, useState } from "react";

function Start({start}){

    const [showCount, setShowCount] = useState(false)
    const [count, setCount] = useState(10)


    useEffect(() => {
        let intervalId;
        if (showCount && count > 0) {
            intervalId = setInterval(() => {
                setCount((prevCount) => prevCount - 1);
            }, 1000);
        } else {
            clearInterval(intervalId);
            setShowCount(false);
        }
        return () => clearInterval(intervalId);
    }, [showCount, count]);
        
    
    const handleClick = () =>{
        start();
        setShowCount(true)
    }
                 

    return(
        <div>
            <button onClick={handleClick} className="startButton">Commencer le jeu</button>
            <Counter counterClass={showCount ? "Counter" : "hideCounter"} count={count}/>
        </div> 
    )
}

export default Start
