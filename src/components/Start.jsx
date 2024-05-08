import Counter from "./Counter";
import { useEffect, useState } from "react";

function Start({start}){

    const [showCount, setShowCount] = useState(false)
    const [count, setCount] = useState(10)


    useEffect(()=>{
        if (count > 0){
            setInterval(()=>{setCount(count - 1)}, 1000)
        }else{
            setShowCount(false)
        }
    }, [count])

    const counter = () =>{
        setShowCount(true)
    }
    

    const handleClick = () =>{
        start();
        counter();
    }
                 

    return(
        <div>
            <button onClick={handleClick} className="startButton">Commencer le jeu</button>
            <Counter counterClass={showCount ? "Counter" : "hideCounter"} count={count}/>
        </div> 
    )
}

export default Start
