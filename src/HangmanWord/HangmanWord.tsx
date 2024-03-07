import "./hangmanWord.css"

type HangmanWordProps = {
  guessedLetters: string[]
  wordToGuess: string
  reveal?:boolean
}

function HangmanWord({
  guessedLetters,
  wordToGuess,
  reveal=false,
}: HangmanWordProps) {

  return (
    <section className="word-container">
      {wordToGuess.split("").map((letter, index) => (
        <span className="underline"key={index}>
          <span 
          style={{
            visibility: guessedLetters.includes(letter) || reveal ? "visible" : "hidden",
            color:!guessedLetters.includes(letter) && reveal ? "red" : "black",           
          }}
          >{letter}</span>
        </span>
      ))}
    </section>
  )
}

export default HangmanWord