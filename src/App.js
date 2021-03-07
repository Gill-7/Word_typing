import React from 'react'
import useTyping from './useTyping'

function App() {
    
    const {inputRef, handleChange, text, run, timer, startGame,
        wordCount} = useTyping()

    return (
        <div>
            <h1>Typing Speed</h1>
            <textarea 
                ref={inputRef}
                onChange={handleChange}
                value={text}
                disabled={!run}
            />
            <h4>Amount of time: {timer}</h4>
            <button onClick={startGame}
                    disabled={run}
            >Start</button>
            <h1>Word Count: {wordCount}</h1>
        </div>
    )
}

export default App