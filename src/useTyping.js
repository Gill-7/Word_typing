import { useState, useEffect, useRef } from 'react'

function useTyping() {
    const STARTING_TIME = 5;

    const [text, setText] = useState("")
    const [timer, setTimer] = useState(STARTING_TIME)
    const [run, setRun] = useState(false)
    const [wordCount, setWordCount] = useState(0)
    const inputRef = useRef(null)


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
        setTimer(STARTING_TIME)
        setText("")
        inputRef.current.disabled = false
        inputRef.current.focus()
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


    return {inputRef, handleChange, text, run, timer, startGame, wordCount}

}

export default useTyping