import React, { useState } from 'react';
import Card from '../components/Card';

function Cards() {

    const [firstCard, setFirstCard] = useState(null);
    
    const initialCardsState = [
        { id: 1, src: "src/assets/img/heisenberg.jpg", selected: false },
        { id: 2, src: "src/assets/img/onepiece.jpg", selected: false },
        { id: 3, src: "src/assets/img/tlou.jpg", selected: false },
        { id: 4, src: "src/assets/img/zelda.jpg", selected: false },
        { id: 5, src: "src/assets/img/heisenberg.jpg", selected: false },
        { id: 6, src: "src/assets/img/onepiece.jpg", selected: false },
        { id: 7, src: "src/assets/img/tlou.jpg", selected: false },
        { id: 8, src: "src/assets/img/zelda.jpg", selected: false }
    ];

    const shuffleCards = (array) => {
        return array.sort(() => Math.random() - 0.5);
    };

    const shuffledCards = shuffleCards(initialCardsState);
    const [cards, setCards] = useState(shuffledCards);

    const chooseCard = (id) => {
        const updatedCards = .map(card => {
            if (card.id === id) {
                if (firstCard === null || !firstCard.selected) {
                    setFirstCard(card);
                    console.log('yes')
                    return { ...card, selected: true };
                } else {
                    if (card.src === firstCard.src) {
                        console.log('Match!');
                        // On ajoute le code pour marquer les cartes comme "trouvées"
                    } else {
                        console.log('No match!');
                        // On ajoute le code pour retourner les cartes face cachée
                    }
                }
            }
            return card;
        });
        setCards(updatedCards);
    };

    return (
        <div className='grid'>
            {cards.map(card => (
                <div key={card.id} onClick={() => chooseCard(card.id)}>
                    <Card source={card.src} alt={`Card${card.id}`} />
                </div>
            ))}
        </div>
    );
}

export default Cards;
