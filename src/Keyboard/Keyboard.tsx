import styles from "./keyboard.module.css"

const keys = [
  "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m",
  "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"
];

type KeyboardProps = {
  activeLetters: string[]
  inactiveLetters: string[]
  addGuessedLetter: (letter: string) => void
  disabled?: boolean
}

 function Keyboard({
  activeLetters,
  inactiveLetters,
  addGuessedLetter,
  disabled = false,
}: KeyboardProps) {
  return (
    <section className="keyboard-container">
        {keys.map(key=>{
          const isActive = activeLetters.includes(key)
          const isInactive = inactiveLetters.includes(key)
          return  <button
          onClick={() => addGuessedLetter(key)}
          className={`${styles.btn} ${isActive ? styles.active : ""} ${isInactive ? styles.inactive : "" }`}   
          disabled={isInactive || isActive || disabled }
          key={key}
        >
          {key}
        </button>
        })}
    </section>
  )
}

export default Keyboard