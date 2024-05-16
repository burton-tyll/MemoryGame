import { useState } from 'react';
import '../Welcome.css';
import Cards from './Cards';

function Welcome() {
    const [showComponentCards, setShowComponentCards] = useState(false);
    const [sound, setSound] = useState(false);
    const [showRules, setShowRules] = useState(false)

    const launchGame = () => {
        setShowComponentCards(true);
        setSound(true);
        playSoundtrack();
        setShowRules(false)
    };

    const playSoundtrack = () => {
        const soundtrack = document.getElementById("soundtrack");
        soundtrack.play();
    };

    const rules = () =>{
        setShowRules(!showRules)
    }

    return (
        <div className='Container'>
            <main>
                <div className='boutons'>
                    <button className='playButton' onClick={launchGame}><img src='/assets/img/playButton.png' /></button>
                    <button className='rulesButton' onClick={rules}><img src='/assets/img/rulesButton.png'/></button>
                </div>
                {showComponentCards ? <Cards /> : null}
                <audio loop id="soundtrack" src="/assets/sounds/marioBrosBand.mp3" type="audio/mp3" autoPlay></audio>
                <div className={showRules ? "BienvenueAnimate" : "Bienvenue"}>
                    <div>
                        <h1>Bienvenue sur Mario Card</h1>
                        <p><img src='/assets/img/piece.png'/>Trouve les cartes identiques pour les retourner</p>
                        <p><img src='/assets/img/piece.png'/>Le jeu se termine lorsque tu as retourné toutes les cartes.</p>
                        <p><img src='/assets/img/piece.png'/>Tu disposes de 10 secondes pour observer toutes les cartes alors ouvre grands les yeux!!</p>
                        <p><img src='/assets/img/piece.png'/>Tu as le droit à 4 erreurs, au delà de ça tu peux recommencer! 🙃</p>
                        <h5><img src='/assets/img/piece.png'/>Bonne chance!</h5>
                    </div>
                    <button className='closeButton' onClick={rules}>Fermer</button>
                </div>
            </main>
            {sound && <audio loop id="soundtrack" src="/assets/sounds/marioBrosBand.mp3" type="audio/mp3" ></audio>}
        </div>
    );
}

export default Welcome;
