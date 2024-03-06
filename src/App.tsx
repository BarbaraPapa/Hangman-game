import "./app.css"
import { useState } from "react"
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

  return (
    <div>
        <h1>lose/win</h1>
      <main>
        <HangmanSketch />
        <HangmanWord />
      </main>
      <Keyboard />
    </div>

  )
}

export default App