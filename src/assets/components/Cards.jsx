import React from 'react'
import Card from './Card'

function Cards({}){
//States
    const nbCard = 4
    //card----------------
    const cards = [
        {id: 1, src: "src/assets/img/heisenberg.jpg"},
        {id: 2, src: "src/assets/img/onepiece.jpg"},
        {id: 3, src: "src/assets/img/tlou.jpg"},
        {id: 4, src: "src/assets/img/zelda.jpg"}
    ]

//Comportements

    // Fonction pour mélanger les cartes de manière aléatoire
    const shuffleCards = (array) => {
        return array.sort(() => Math.random() - 0.5);
    };

    // Mélanger les cartes
    const shuffledCards = shuffleCards(cards);

//Return

    return(
        <div className='grid'>
            {shuffledCards.map(card =>(
            <div>
                <Card src={card.src} alt={card.id} key={card.id}/>
            </div>
            ))}
        </div>
    )
}

export default Cards