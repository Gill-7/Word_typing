import React, { useState, useEffect } from 'react'

function App() {

    const [text, setText] = useState("")
    const [timer, setTimer] = useState(2)
    const [run, setRun] = useState(false)
    const [wordCount, setWordCount] = useState(0)

    function handleChange(e) {
        const {value} = e.target
        setText(value)
    }

    function countWord(text) {
        const wordsArr = text.trim().split(" ")
        return wordsArr.filter(word => word !== "").length
    }

    function startGame() {
        setRun(true)
        setTimer(5)
        setText("")
    }

    function endGame() {
        setRun(false)
        setWordCount(countWord(text))
    }
    
    useEffect(() => {
        if(run && timer > 0 ) {
            setTimeout(() => {
                setTimer(prevTimer => prevTimer - 1)
            }, 1000)
        }
        else if (timer === 0) {
            endGame()
        }
    }, [run, timer])



    return (
        <div>
            <h1>Typing Speed</h1>
            <textarea 
                onChange={handleChange}
                value={text}
            />
            <h4>Amount of time: {timer}</h4>
            <button onClick={startGame}>Start</button>
            <h1>Word Count: {wordCount}</h1>
        </div>
    )
}

export default App