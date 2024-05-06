import React, {useState} from 'react'
import '../styles/App.css'

function Card({source}){
//States
const [animate, setAnimate] = useState(false)
const [imgSrc, setImgSrc] = useState(false)


const showCard = () =>{
    setTimeout(()=>{setAnimate(true)}, 0)
    setTimeout(()=>{setImgSrc(true)}, 300)
    setTimeout(()=>{setAnimate(false)}, 300)
}

const backCard = "/src/assets/img/back_card.jpg"

    

    return(
        <img onClick={showCard} src={imgSrc ? source : backCard} className={animate ? "cardAnimate" : "card"}></img>
    )
}

export default Card;
