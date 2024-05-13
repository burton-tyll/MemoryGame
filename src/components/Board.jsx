function Board({crossSrc1, crossSrc2, crossSrc3, crossSrc4}){

    const score = () =>{

    }

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
                <ul className="scoreTab">
                    
                </ul>
            </div>
        </div>
    )
}

export default Board