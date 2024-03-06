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
    <body>
      <h1>Hangman Game</h1>
      <h2>lose/win</h2>
      <HangmanSketch/>
      <HangmanWord/>
      <Keyboard/>
    </body>
    
  )
}

export default App