import "./app.css"
import { useState, useEffect,useCallback } from "react"
import words from "./wordList.json"
import HangmanSketch from "./HangmanSketch/HangmanSketch"
import HangmanWord from "./HangmanWord/HangmanWord"
import Keyboard from "./Keyboard/Keyboard"



function getWord() {
  return words[Math.floor(Math.random() * words.length)]
}

function App() {
  const [wordToGuess, setWordToGuess] = useState(getWord)
  const [guessedLetters, setGuessedLetters] = useState<string[]>([])

  const incorrectLetters = guessedLetters.filter(
    letter => !wordToGuess.includes(letter)
  )

  const addGuessedLetter = useCallback(
    (letter: string) => {
      if (guessedLetters.includes(letter) ) return

      setGuessedLetters(currentLetters => [...currentLetters, letter])
    },
    [guessedLetters]
  )

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key
      if (!key.match(/^[a-z]$/)) return

      e.preventDefault()
      addGuessedLetter(key)
    }

    document.addEventListener("keypress", handler)

    return () => {
      document.removeEventListener("keypress", handler)
    }
  }, [guessedLetters])

  return (
    <div>
        <h1>lose/win</h1>
      <main>
        <HangmanSketch numberOfGuesses={incorrectLetters.length}/>
        <HangmanWord guessedLetters={guessedLetters}wordToGuess={wordToGuess}/>
        
      </main>
      <Keyboard />
    </div>

  )
}

export default App