import { useState, useEffect } from "react";
import Start from "./Start"
import Board from "./Board";
import '../App.css'
import Gameover from "./Gameover";
import Victory from "./Victory";

function Cards(){

    const band = document.getElementById('soundtrack')
    const errorSound = ["error", "/assets/sounds/errorSound.wav"];
    const gameoverSound = ["gameover", "/assets/sounds/gameover.wav"]
    const matchSound = ["match", "/assets/sounds/match.wav"]
    const victorySound = ["victory", "/assets/sounds/victoryBand.mp3"]
    const [gameover, setGameover] = useState(false)
    const [victory, setVictory] = useState(false)

    const [gameStarted, setGameStarted] = useState(false)
    const [firstCard, setFirstCard] = useState(null);
    const [secondCard, setSecondCard] = useState(null);
    const [firstCardID, setFirstCardID] = useState(null);
    const [secondCardID, setSecondCardID] = useState(null);
    const [error1, setError1] = useState(false)
    const [error2, setError2] = useState(false)
    const [error3, setError3] = useState(false)
    const [error4, setError4] = useState(false)

    const playSound = (sound) => {
        const Sound = document.getElementById(sound[0]);
        Sound.play();
    };

    const [cards, setCards] = useState([
            { id: 1, src: "/assets/img/back_card.jpg", srcReturn:"/assets/img/yoshi.png", animate: "frame"},
            { id: 2, src: "/assets/img/back_card.jpg", srcReturn:"/assets/img/bowser.png", animate: "frame"},
            { id: 3, src: "/assets/img/back_card.jpg", srcReturn:"/assets/img/waluigi.png", animate: "frame"},
            { id: 4, src: "/assets/img/back_card.jpg", srcReturn:"/assets/img/donkeykong.png", animate: "frame"},
            { id: 5, src: "/assets/img/back_card.jpg", srcReturn:"/assets/img/yoshi.png", animate: "frame"},
            { id: 6, src: "/assets/img/back_card.jpg", srcReturn:"/assets/img/bowser.png", animate: "frame"},
            { id: 7, src: "/assets/img/back_card.jpg", srcReturn:"/assets/img/waluigi.png", animate: "frame"},
            { id: 8, src: "/assets/img/back_card.jpg", srcReturn:"/assets/img/donkeykong.png", animate: "frame"},
            { id: 9, src: "/assets/img/back_card.jpg", srcReturn:"/assets/img/mario.png", animate: "frame"},
            { id: 10, src: "/assets/img/back_card.jpg", srcReturn:"/assets/img/goomba.png", animate: "frame"},
            { id: 11, src: "/assets/img/back_card.jpg", srcReturn:"/assets/img/peach.png", animate: "frame"},
            { id: 12, src: "/assets/img/back_card.jpg", srcReturn:"/assets/img/toad.png", animate: "frame"},
            { id: 13, src: "/assets/img/back_card.jpg", srcReturn:"/assets/img/mario.png", animate: "frame"},
            { id: 14, src: "/assets/img/back_card.jpg", srcReturn:"/assets/img/goomba.png", animate: "frame"},
            { id: 15, src: "/assets/img/back_card.jpg", srcReturn:"/assets/img/peach.png", animate: "frame"},
            { id: 16, src: "/assets/img/back_card.jpg", srcReturn:"/assets/img/toad.png", animate: "frame"}
        ])

    const setScore = () => {
        const newTime = localStorage.getItem('timer');
        localStorage.setItem('lastScore', newTime)
        let scores = [];
    
        // On récupère tous les scores déjà enregistrés
        let existingScores = localStorage.getItem('scores');
        if (existingScores !== '' && existingScores !== null){
            scores = JSON.parse(existingScores);
            // Vérifier si le nouveau score n'existe pas déjà dans le tableau
            if (!scores.includes(newTime)) {
                scores.push(newTime);
            }
        } else {
            scores.push(newTime);
        }
        
        // Stocker les scores mis à jour dans le localStorage
        localStorage.setItem('scores', JSON.stringify(scores));
        
        console.log(scores);
    }
        
        

    useEffect(() => {
        // Code existant pour vérifier les paires correspondantes
    
        const allCardsMatched = cards.every(card => card.animate === "disabledCard");
        if (allCardsMatched) {
            setVictory(true);
            band.pause();
            playSound(victorySound);
            setScore(); // Enregistrer le score une fois la victoire obtenue
        }
    }, [secondCard]);
    

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

    const shuffleCards = (array) => {
        const basicCards = [...array]
        const shuffledCards = basicCards.sort(() => Math.random() - 0.5);
        return shuffledCards
    };

    const chooseCards = (id) => {
        cards.map(card => {
            if (id === card.id && firstCard === null && card.src !== card.srcReturn){
                setFirstCard(card.srcReturn)
                setFirstCardID(card.id)
            }
            if (id === card.id && firstCard !== null && firstCard !== secondCard && secondCard === null){
                setSecondCard(card.srcReturn)
                setSecondCardID(card.id)
            }
        })
    };


    const retryGame = () =>{
        window.location.reload()
    }

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
            playSound(matchSound)
        }else{
            //ACTION
            if (firstCard !==null && secondCard !==null){
                const updatedCards = cards.map(card =>{
                    if(card.animate !== "disabledCard"){
                        const backCard = "/assets/img/back_card.jpg"
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
                playSound(errorSound)
                if (error1){
                    playSound(errorSound)
                    setError2(true)
                    if(error2){
                        playSound(errorSound)
                        setError3(true)
                        if(error3){
                            playSound(gameoverSound)
                            setError4(true)
                            band.pause();
                            setGameover(true)
                        }
                    }
                }
            }
        }         
    }, [secondCard])
    

    const startGame = () => {
        setGameStarted(true);
        const shuffledCards = shuffleCards(cards);
        const showAllCards = () => {
            console.log(shuffledCards);
            const animateCards = cards.map(card =>{
                return{...card, animate: "cardAnimate"}
            })
            setCards(animateCards)
            const updatedCards = shuffledCards.map(card => {
                return { ...card, src: card.srcReturn};
            });
            setTimeout(()=>{setCards(updatedCards);}, 300)
            setTimeout(hideAllCards, 5000); // Appel à hideAllCards() après 10 secondes
        };

        const hideAllCards = () => {
            const updatedCards = shuffledCards.map(card => {
                return { ...card, src: card.src };
            });
            setCards(updatedCards);
        };

        showAllCards();
    };


    const cardsGrid = cards.map(card =>{
        return (<img 
                    className={card.animate} 
                    src={card.src} 
                    key={card.id} 
                    onClick={gameStarted ? () => {showCard(card.id)}: () => {console.log("Démarrez le jeu avant de cliquer sur les cartes")}}>
                </img>)
    })

    return(
        <div className="Box">
            <div className="cardsContainer">
                <div className="startContainer">
                    <div className="grid">
                        {cardsGrid}
                    </div>
                    <Start start={startGame}/>
                </div>
                <Board 
                    crossSrc1={error1 ? "/assets/img/croixRouge.png" : "/assets/img/croix.png"}
                    crossSrc2={error2 ? "/assets/img/croixRouge.png" : "/assets/img/croix.png"}
                    crossSrc3={error3 ? "/assets/img/croixRouge.png" : "/assets/img/croix.png"}
                    crossSrc4={error4 ? "/assets/img/croixRouge.png" : "/assets/img/croix.png"}
                />
            </div>
            <audio id="error" src="/assets/sounds/errorSound.wav" type="audio/mp3"></audio>
            <audio id="gameover" src="/assets/sounds/gameover.wav" type="audio/mp3"></audio>
            <audio id="match" src="/assets/sounds/match.wav" type="audio/mp3"></audio>
            <audio id="victory" src="/assets/sounds/victoryBand.mp3" type="audio/mp3"></audio>
            <Gameover retryButton={retryGame} gameoverClass={gameover ? "gameoverScreen" : "gameoverScreenDisabled"}/>
            <Victory retryButton={retryGame} victoryClass={victory ? "victoryScreen" : "victoryScreenDisabled"}/>
        </div>
    )
}

export default Cards
