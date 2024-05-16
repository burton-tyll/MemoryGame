import React, { useState, useEffect } from 'react';

function Board({ crossSrc1, crossSrc2, crossSrc3, crossSrc4 }) {
    const [scores, setScores] = useState([]);
    const [lastScore, setLastScore] = useState(null);

    useEffect(() => {
        const scoresString = localStorage.getItem('scores');
        if (scoresString) {
            const scoresArray = JSON.parse(scoresString);
            setScores(scoresArray);
        }

        const lastScoreString = localStorage.getItem('lastScore');
        if (lastScoreString) {
            setLastScore(Number(lastScoreString));
        }
    }, []);

    const bestScore = () => {
        if (scores.length > 0) {
            const sortedScores = [...new Set(scores)].sort((a, b) => a - b);
            return sortedScores[0];
        }
        return null;
    };

    return (
        <div className="Board">
            <div className="crossContainer">
                <img src={crossSrc1} alt="Cross 1" />
                <img src={crossSrc2} alt="Cross 2" />
                <img src={crossSrc3} alt="Cross 3" />
                <img src={crossSrc4} alt="Cross 4" />
            </div>
            <div className="welcomeMessage">
                <h1>Tableau des scores</h1>
                <div className="scoreTab">
                    <h2>Meilleur score:</h2>
                    <li key="best-score"><img src='/assets/img/bestScore.png' className='bestScore'/>{bestScore()} secondes</li>
                    <h2>Dernier Score:</h2>
                    <li key="last-score" className='lastScore'><img src='/assets/img/lastScore.png'/>{lastScore} secondes</li>
                </div>
            </div>
        </div>
    );
}

export default Board;