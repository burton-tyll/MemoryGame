function Gameover({gameoverClass, retryButton}){
    return(
        <div className={gameoverClass}>
            <button onClick={retryButton} className="retryButton">Recommencer</button>
        </div>
    )
}

export default Gameover