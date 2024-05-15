function Board({crossSrc1, crossSrc2, crossSrc3, crossSrc4}){

    const getScores = () => {
        let scoresTab = [];
        const scoresString = localStorage.getItem('scores'); // Récupérer la chaîne JSON
        if (scoresString) {
            const scoresArray = JSON.parse(scoresString); // Convertir la chaîne JSON en tableau
            scoresTab = scoresArray.slice(); // Copier les scores dans scoresTab
            console.log(scoresTab)
            return scoresTab
        }
    }

    const bestScore = () =>{
        const scores = getScores()
        scores.sort((a, b) => a - b); // Trier les scores par ordre croissant
        const sortedScores = [...new Set(scores)];
        const bestScore = scores[0]
        return (bestScore)
    }
     
    const lastScore = localStorage.getItem('lastScore')

    return(
        <div className="Board">
            <div className="crossContainer">
                <img src={crossSrc1} />
                <img src={crossSrc2} />
                <img src={crossSrc3} />
                <img src={crossSrc4} />
            </div>
            <div className="welcomeMessage">
                <h1>Tableau des scores</h1>
                <div className="scoreTab">
                    <h2>Meilleur score:</h2>
                    <li>{bestScore()} secondes</li>
                    <h2>Dernier Score:</h2>
                    <li>{lastScore} secondes</li>
                </div>
            </div>
        </div>
    )
}

export default Board