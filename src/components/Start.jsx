import Counter from "./Counter";
import { useEffect, useState } from "react";
import Time from "./Time";

function Start({ start }){

    const [showCount, setShowCount] = useState(false)
    const [count, setCount] = useState(5)
    const [time, setTime] = useState(0)


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
        
    
    const handleClick = () => {
        start()
        setShowCount(true);
        setTimeout(()=>{startMatch.play()}, 1800)
        // Démarrer l'incrémentation du temps après avoir cliqué sur le bouton
        setTimeout(()=>{setInterval(() => {
            setTime(prevTime => prevTime + 1);
        }, 1000);}, 5000)
    };

    useEffect(()=>{
        localStorage.setItem('timer', time)
    }, [time])
                 

    return(
        <div className="startContainer">
            <button onClick={handleClick} className="startButton">Commencer le jeu</button>
            <Time timeCount={time}/>
            <Counter counterClass={showCount ? "Counter" : "hideCounter"} count={count}/>
            <audio id="startMatch" src="/assets/sounds/mariostart.mp3" type="audio/mp3"></audio>
        </div> 
    )
}

export default Start
