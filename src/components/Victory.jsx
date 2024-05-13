function Victory({victoryClass, retryButton}){
    return(
        <div className={victoryClass}>
            <button onClick={retryButton} className="retryButton">Recommencer</button>
        </div>
    )
}

export default Victory