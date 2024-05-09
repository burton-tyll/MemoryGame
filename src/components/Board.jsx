function Board({crossSrc1, crossSrc2, crossSrc3, crossSrc4}){

    return(
        <div className="Board">
            <div className="crossContainer">
                <img src={crossSrc1} />
                <img src={crossSrc2} />
                <img src={crossSrc3} />
                <img src={crossSrc4} />
            </div>
            <div className="Bienvenue">
                <h2>Bienvenue sur Card ashian</h2>
                <p>Trouve les cartes identiques pour les retourner</p>
                <p>Le jeu se termine lorsque tu as retourné toutes les cartes.</p>
                <p>Tu dispose de 10 secondes pour observer toutes les cartes alors ouvre grands les yeux!!</p>
                <p>Tu as le droit à 4 erreurs, au delà de ça tu peux recommencer! 🙃</p>
                <h5>Bon chance!</h5>
            </div>
        </div>
    )
}

export default Board