import React, {useState} from 'react'
import '../styles/App.css'

function Card({src, alt}){
//States

    const [card, setCard] = useState(false)
    const [animate, setAnimate] = useState(false)
    const [imgSrc, setImgSrc] = useState(false)
    
//comportements

    const backCard = "/src/assets/img/back_card.jpg"

    const showCard = () =>{
        setCard(!card)
        setTimeout(()=>{setImgSrc(!imgSrc)}, 300)
        setTimeout(()=>{setAnimate(true)}, 0)
        setTimeout(()=>{setAnimate(false)}, 300)
        console.log(card)
    }

//return
    return(
        <img onClick={showCard} src={imgSrc ? src : "/src/assets/img/back_card.jpg" } alt={`Card${alt}`} className={animate ? "cardAnimate" : "card"} status={card ? "true": "false"} />
    )
}

export default Card;
