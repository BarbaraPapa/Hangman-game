import "./hangmanWord.css"

function HangmanWord() {

  const word = "barbara"
  const guessedLettters =["b"]


  return (
    <section className="word-container">
      {word.split("").map((letter, index) => (
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