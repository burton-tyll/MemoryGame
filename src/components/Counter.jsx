function Counter({count, counterClass}){

    return(
        <div className={counterClass}>
            <h1>{count}</h1>
        </div>
    )
}

export default Counter