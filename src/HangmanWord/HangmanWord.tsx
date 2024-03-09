import "./hangmanWord.css"

// Define the props interface for the HangmanWord component
type HangmanWordProps = {
  guessedLetters: string[]
  wordToGuess: string
  reveal?: boolean
}

// Define the HangmanWord component which takes guessedLetters, wordToGuess, and reveal as props
function HangmanWord({
  guessedLetters,
  wordToGuess,
  reveal = false,
}: HangmanWordProps) {

  return (
    <section className="word-container">
      {/* Map through each letter of the wordToGuess and render it */}
      {wordToGuess.split("").map((letter, index) => (
        <span className="underline" key={index}>
          {/* Render each letter with styling based on whether it's guessed or revealed */}
          <span
            style={{
              visibility: guessedLetters.includes(letter) || reveal ? "visible" : "hidden",
              color: !guessedLetters.includes(letter) && reveal ? "red" : "black",
            }}
          >{letter}</span>
        </span>
      ))}
    </section>
  )
}

export default HangmanWord