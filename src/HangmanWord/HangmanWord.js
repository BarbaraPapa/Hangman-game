import { jsx as _jsx } from "react/jsx-runtime";
import "./hangmanWord.css";
function HangmanWord({ guessedLetters, wordToGuess, reveal = false, }) {
    return (_jsx("section", { className: "word-container", children: wordToGuess.split("").map((letter, index) => (_jsx("span", { className: "underline", children: _jsx("span", { style: {
                    visibility: guessedLetters.includes(letter) || reveal ? "visible" : "hidden",
                    color: !guessedLetters.includes(letter) && reveal ? "red" : "black",
                }, children: letter }) }, index))) }));
}
export default HangmanWord;
