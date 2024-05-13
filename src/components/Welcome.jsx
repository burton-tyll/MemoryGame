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

    const test = () =>{
        alert('yes')
    }

    return (
        <div className='Container'>
            <main>
                <img className='welcome_background' src='/src/assets/img/background.jpg' alt='welcomeBackground' useMap='play'></img>
                <map name="play">
                    <area className='playArea' shape="rect" coords="100,100,200,200" href='#' onClick={test}/>
                </map>
                {showComponentCards ? <Cards /> : null}
                <audio loop id="soundtrack" src="/src/assets/sounds/marioBrosBand.mp3" type="audio/mp3" autoPlay></audio>
                <div className='menu'>
                    <button className='menuButton' onClick={launchGame}>Jouer</button>
                    <button className='menuButton' onClick={rules}>Règles</button>
                </div>
                <div className={showRules ? "BienvenueAnimate" : "Bienvenue"}>
                    <h1>Bienvenue sur Mario Card</h1>
                    <p>Trouve les cartes identiques pour les retourner</p>
                    <p>Le jeu se termine lorsque tu as retourné toutes les cartes.</p>
                    <p>Tu disposes de 10 secondes pour observer toutes les cartes alors ouvre grands les yeux!!</p>
                    <p>Tu as le droit à 4 erreurs, au delà de ça tu peux recommencer! 🙃</p>
                    <h5>Bon chance!</h5>
                </div>
            </main>
            {sound && <audio loop id="soundtrack" src="/src/assets/sounds/marioBrosBand.mp3" type="audio/mp3" ></audio>}
        </div>
    );
}

export default Welcome;
