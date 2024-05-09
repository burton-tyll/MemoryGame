import React, { useState, useEffect } from "react";
import Start from "./Start"
import Board from "./Board";

function Cards(){

    const [animate, setAnimate] = useState(false)
    const [imgSrc, setImgSrc] = useState(false)
    const [gameStarted, setGameStarted] = useState(false)
    const [firstCard, setFirstCard] = useState(null);
    const [secondCard, setSecondCard] = useState(null);
    const [firstCardID, setFirstCardID] = useState(null);
    const [secondCardID, setSecondCardID] = useState(null);
    const [error1, setError1] = useState(false)
    const [error2, setError2] = useState(false)
    const [error3, setError3] = useState(false)
    const [error4, setError4] = useState(false)

    const [cards, setCards] = useState([
            { id: 1, src: "/src/assets/img/back_card.jpg", srcReturn:"src/assets/img/heisenberg.jpg", animate: "frame"},
            { id: 2, src: "/src/assets/img/back_card.jpg", srcReturn:"src/assets/img/onepiece.jpg", animate: "frame"},
            { id: 3, src: "/src/assets/img/back_card.jpg", srcReturn:"src/assets/img/tlou.jpg", animate: "frame"},
            { id: 4, src: "/src/assets/img/back_card.jpg", srcReturn:"src/assets/img/zelda.jpg", animate: "frame"},
            { id: 5, src: "/src/assets/img/back_card.jpg", srcReturn:"src/assets/img/heisenberg.jpg", animate: "frame"},
            { id: 6, src: "/src/assets/img/back_card.jpg", srcReturn:"src/assets/img/onepiece.jpg", animate: "frame"},
            { id: 7, src: "/src/assets/img/back_card.jpg", srcReturn:"src/assets/img/tlou.jpg", animate: "frame"},
            { id: 8, src: "/src/assets/img/back_card.jpg", srcReturn:"src/assets/img/zelda.jpg", animate: "frame"},
            { id: 9, src: "/src/assets/img/back_card.jpg", srcReturn:"src/assets/img/mario.jpg", animate: "frame"},
            { id: 10, src: "/src/assets/img/back_card.jpg", srcReturn:"src/assets/img/astronaute.jpg", animate: "frame"},
            { id: 11, src: "/src/assets/img/back_card.jpg", srcReturn:"src/assets/img/ocarina.jpg", animate: "frame"},
            { id: 12, src: "/src/assets/img/back_card.jpg", srcReturn:"src/assets/img/ac.jpg", animate: "frame"},
            { id: 13, src: "/src/assets/img/back_card.jpg", srcReturn:"src/assets/img/mario.jpg", animate: "frame"},
            { id: 14, src: "/src/assets/img/back_card.jpg", srcReturn:"src/assets/img/astronaute.jpg", animate: "frame"},
            { id: 15, src: "/src/assets/img/back_card.jpg", srcReturn:"src/assets/img/ocarina.jpg", animate: "frame"},
            { id: 16, src: "/src/assets/img/back_card.jpg", srcReturn:"src/assets/img/ac.jpg", animate: "frame"}
        ])

    const showCard = (id) => {
        const updatedCards = cards.map(card => {
            if (id === card.id) {
                chooseCards(card.id)
                setTimeout(() => {
                    setCards(prevCards => 
                        prevCards.map(prevCard => 
                            prevCard.id === id ? { ...prevCard, src: card.srcReturn } : prevCard
                        )
                    );
                }, 300);
                return { ...card, animate: "cardAnimate" };
            } else {
                return card;
            }
        });
        setCards(updatedCards);
    };

    const hideCards = (id) => {
        const updatedCards = cards.map(card => {
            if (id === card.id) {
                setTimeout(() => {
                    setCards(prevCards => 
                        prevCards.map(prevCard => 
                            prevCard.id === id ? { ...prevCard, src: card.src } : prevCard
                        )
                    );
                }, 300);
                return { ...card, animate: "cardAnimate" };
            } else {
                return card;
            }
        });
        setCards(updatedCards);
    };

    const shuffleCards = (array) => {
        const basicCards = [...array]
        const shuffledCards = basicCards.sort(() => Math.random() - 0.5);
        return shuffledCards
    };

    const chooseCards = (id) => {
        const cardOne = cards.map(card => {
            if (id === card.id && firstCard === null){
                setFirstCard(card.srcReturn)
                setFirstCardID(card.id)
            }
            if (id === card.id && firstCard !== null && firstCard !== secondCard && secondCard === null){
                setSecondCard(card.srcReturn)
                setSecondCardID(card.id)
            }
        })
    };

    //Ici on applique la comparaison des cartes sélectionnées
    useEffect(() => {
        if (firstCard !== null && secondCard !== null && firstCard === secondCard && firstCardID !== secondCardID){
            //ACTION
            const updatedCards = cards.map(card =>{
                if(firstCard === card.srcReturn){
                    return {...card, animate: "disabledCard"}
                }else{
                    return card
                }
            })
            setCards(updatedCards)
            //RESET
            setFirstCard(null)
            setSecondCard(null)
        }else{
            //ACTION
            if (firstCard !==null && secondCard !==null){
                const updatedCards = cards.map(card =>{
                    if(card.animate !== "disabledCard"){
                        const backCard = "/src/assets/img/back_card.jpg"
                        return {...card, src: backCard, animate: 'frame'}
                    }else{
                        return card
                    }
                })
                setTimeout(()=>{setCards(updatedCards)}, 1000)
                //RESET
                setFirstCard(null)
                setSecondCard(null)
                setError1(true)
                if (error1){
                    setError2(true)
                    if(error2){
                        setError3(true)
                        if(error3){
                            setError4(true)
                        }
                    }
                }
            }
        }         
    }, [secondCard])

    const startGame = () =>{
        setGameStarted(true)
        const shuffledCards = shuffleCards(cards)
        const showAllCards = () =>{
            const updatedCards = shuffledCards.map(card =>{
                return {...card, src: card.srcReturn}
            })
            setCards(updatedCards)
        }
        showAllCards()
        const hideAllCards = () =>{
            const updatedCards = shuffledCards.map(card =>{
                return {...card, src: card.src}
            })
            setCards(updatedCards)
        }
        setTimeout(()=>{hideAllCards()}, 10000)
    }

    const cardsGrid = cards.map(card =>{
        return (<img 
                    className={card.animate} 
                    src={card.src} 
                    key={card.id} 
                    onClick={gameStarted ? () => {showCard(card.id)}: () => {console.log("Démarrez le jeu avant de cliquer sur les cartes")}}>
                </img>)
    })

    return(
        <div className="grid">
            {cardsGrid}
            <Start start={startGame}/>
            <Board 
            crossSrc1={error1 ? "/src/assets/img/croixRouge.png" : "/src/assets/img/croix.png"}
            crossSrc2={error2 ? "/src/assets/img/croixRouge.png" : "/src/assets/img/croix.png"}
            crossSrc3={error3 ? "/src/assets/img/croixRouge.png" : "/src/assets/img/croix.png"}
            crossSrc4={error4 ? "/src/assets/img/croixRouge.png" : "/src/assets/img/croix.png"}
            />
        </div>
    )
}

export default Cards
