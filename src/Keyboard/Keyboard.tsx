import "./keyboard.css";

// Define an array containing all the letters of the alphabet as keys
const keys = [
  "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m",
  "n", "ñ", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"
];

// Define the props interface for the Keyboard component
type KeyboardProps = {
  activeLetters: string[]
  inactiveLetters: string[]
  addGuessedLetter: (letter: string) => void
  disabled?: boolean
}

// Define the Keyboard component which takes activeLetters, inactiveLetters, addGuessedLetter, and disabled as props
function Keyboard({
  activeLetters,
  inactiveLetters,
  addGuessedLetter,
  disabled = false,
}: KeyboardProps) {
  return (
    <section className="keyboardContainer">
      {/* Map through each key and render a button for each */}
      {keys.map(key => {
        // Check if the current key is active or inactive
        const isActive = activeLetters.includes(key)
        const isInactive = inactiveLetters.includes(key)
        return <button
          onClick={() => addGuessedLetter(key)} // Call addGuessedLetter function with the key as an argument when the button is clicked
          className={`btnKeyboard ${isActive ? "active" : ""} ${isInactive ? "inactive" : ""}`} // Apply appropriate classes based on whether the key is active or inactive  
          disabled={isInactive || isActive || disabled} // Disable the button if it's inactive, active, or if the keyboard is disabled
          key={key} // Set a unique key for each button
        >
          {key} {/* Display the key text on the button */}
        </button>
      })}
    </section>
  )
}

export default Keyboard;
