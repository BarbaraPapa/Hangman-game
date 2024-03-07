import "./hangmanWord.css"

type HangmanWordProps = {
  guessedLetters: string[]
  wordToGuess: string
  
}

function HangmanWord({
  guessedLetters,
  wordToGuess,
 
}: HangmanWordProps) {

  const word = "barbara"
  const guessedLettters =["b"]


  return (
    <section className="word-container">
      {wordToGuess.split("").map((letter, index) => (
        <span className="underline"key={index}>
          <span 
          style={{
            visibility: guessedLettters.includes(letter) ? "visible" : "hidden"
          }}
          >{letter}</span>
        </span>
      ))}
    </section>
  )
}

export default HangmanWord