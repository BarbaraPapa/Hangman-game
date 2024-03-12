import "./app.css"
import { useState, useEffect, useCallback } from "react"
import words from "./wordList.json"
import italianWords from "./wordList-ita.json" 
import spanishWords from "./wordList-esp.json" 
import HangmanSketch from "./HangmanSketch/HangmanSketch"
import HangmanWord from "./HangmanWord/HangmanWord"
import Keyboard from "./Keyboard/Keyboard"


type WordList = string[]; 

// Function to get a random word from the word list
function getWord(wordList: WordList): string { 
  return wordList[Math.floor(Math.random() * wordList.length)]
}

function App() {
  // State variables to manage the word to guess and guessed letters
  const [wordList, setWordList] = useState(words) 
  const [wordToGuess, setWordToGuess] = useState(getWord(wordList))
  const [guessedLetters, setGuessedLetters] = useState<string[]>([])
  const [selectedLanguage, setSelectedLanguage] = useState("english") 

  // Array of incorrect letters guessed by the player
  const incorrectLetters = guessedLetters.filter(
    letter => !wordToGuess.includes(letter)
  )

   // Check if the player has lost the game
  const isLoser = incorrectLetters.length >= 6

  // Check if the player has won the game
  const isWinner = wordToGuess
    .split("")
    .every(letter => guessedLetters.includes(letter))

 // Function to add a guessed letter
  const addGuessedLetter = useCallback(
    (letter: string) => {
      if (guessedLetters.includes(letter) || isWinner || isLoser) return
      setGuessedLetters(currentLetters => [...currentLetters, letter])
    },
    [guessedLetters, isWinner, isLoser]
  )

  // Handle keypress events for adding guessed letters
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

// Handle keypress events for restarting the game
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key
      if (key !== "Enter") return
      e.preventDefault()
      setGuessedLetters([])
      setWordToGuess(getWord(wordList)) 
    }
    document.addEventListener("keypress", handler)
    return () => {
      document.removeEventListener("keypress", handler)
    }
  }, [wordList]) 

  //Handle change list of words
  const handleListChange = (newList: WordList, language: string) => {
    setWordList(newList)
    setGuessedLetters([])
    setWordToGuess(getWord(newList))
    setSelectedLanguage(language) 
  }

  return (
    <div>
      <main>
         {/* Rendering the HangmanSketch component with the number of incorrect guesses */}
        <HangmanSketch numberOfGuesses={incorrectLetters.length} />
        <section>
           {/* Rendering the outcome message */}
          <h1 className={isWinner || isLoser ? "appear" : ""}>
            {isWinner && "You Won! 🎉"}
            {isLoser && "You Lose 🫣"}
          </h1>
          <div>
             {/* Rendering the HangmanWord component */}
            <HangmanWord reveal={isLoser} guessedLetters={guessedLetters} wordToGuess={wordToGuess} />
          </div>
        </section>
      </main>
       {/* Rendering the Keyboard component */}
      <Keyboard
        disabled={isWinner || isLoser}
        activeLetters={guessedLetters.filter(letter => wordToGuess.includes(letter))}
        inactiveLetters={incorrectLetters}
        addGuessedLetter={addGuessedLetter} />

      {/*buttons to change the word list */}
      <div className="select-language">
        <button
          onClick={() => handleListChange(words, "english")}
          className={selectedLanguage === "english" ? "selected" : ""}
        >
          English
        </button>
        <button
          onClick={() => handleListChange(italianWords, "italian")}
          className={selectedLanguage === "italian" ? "selected" : ""}
        >
          Italiano
        </button>
        <button
          onClick={() => handleListChange(spanishWords, "spanish")}
          className={selectedLanguage === "spanish" ? "selected" : ""}
        >
          Español
        </button>
      </div>

      <div className="info">
         {/* Instruction section */}
        <h2>Instruction</h2>
        <p>Use the buttons to select the language you want to play with</p> 
        <p>To play you can use the keyboard or the mouse to select letters and press enter to restart the game.</p>
      </div>
    </div>
  )
}

export default App

