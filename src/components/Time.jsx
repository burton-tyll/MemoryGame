function Time( { timeCount } ){

    return(
        <div className="timer">
            <img className='timerImage' src="/assets/img/timer.png"/>
            <h2 className="timerh2">{timeCount}</h2>
        </div>
    )
}

export default Time