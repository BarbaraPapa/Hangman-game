import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import "./app.css";
import { useState, useEffect, useCallback } from "react";
import words from "./wordList.json";
import italianWords from "./wordList-ita.json";
import spanishWords from "./wordList-ita.json";
import HangmanSketch from "./HangmanSketch/HangmanSketch";
import HangmanWord from "./HangmanWord/HangmanWord";
import Keyboard from "./Keyboard/Keyboard";
// Function to get a random word from the word list
function getWord(wordList) {
    return wordList[Math.floor(Math.random() * wordList.length)];
}
function App() {
    // State variables to manage the word to guess and guessed letters
    const [wordList, setWordList] = useState(words);
    const [wordToGuess, setWordToGuess] = useState(getWord(wordList));
    const [guessedLetters, setGuessedLetters] = useState([]);
    const [selectedLanguage, setSelectedLanguage] = useState("english");
    // Array of incorrect letters guessed by the player
    const incorrectLetters = guessedLetters.filter(letter => !wordToGuess.includes(letter));
    // Check if the player has lost the game
    const isLoser = incorrectLetters.length >= 6;
    // Check if the player has won the game
    const isWinner = wordToGuess
        .split("")
        .every(letter => guessedLetters.includes(letter));
    // Function to add a guessed letter
    const addGuessedLetter = useCallback((letter) => {
        if (guessedLetters.includes(letter) || isWinner || isLoser)
            return;
        setGuessedLetters(currentLetters => [...currentLetters, letter]);
    }, [guessedLetters, isWinner, isLoser]);
    // Handle keypress events for adding guessed letters
    useEffect(() => {
        const handler = (e) => {
            const key = e.key;
            if (!key.match(/^[a-z]$/))
                return;
            e.preventDefault();
            addGuessedLetter(key);
        };
        document.addEventListener("keypress", handler);
        return () => {
            document.removeEventListener("keypress", handler);
        };
    }, [guessedLetters]);
    // Handle keypress events for restarting the game
    useEffect(() => {
        const handler = (e) => {
            const key = e.key;
            if (key !== "Enter")
                return;
            e.preventDefault();
            setGuessedLetters([]);
            setWordToGuess(getWord(wordList));
        };
        document.addEventListener("keypress", handler);
        return () => {
            document.removeEventListener("keypress", handler);
        };
    }, [wordList]);
    //Handle change list of words
    const handleListChange = (newList, language) => {
        setWordList(newList);
        setGuessedLetters([]);
        setWordToGuess(getWord(newList));
        setSelectedLanguage(language);
    };
    return (_jsxs("div", { children: [_jsxs("main", { children: [_jsx(HangmanSketch, { numberOfGuesses: incorrectLetters.length }), _jsxs("section", { children: [_jsxs("h1", { className: isWinner || isLoser ? "appear" : "", children: [isWinner && "You Won! 🎉", isLoser && "You Lose 🫣"] }), _jsx("div", { children: _jsx(HangmanWord, { reveal: isLoser, guessedLetters: guessedLetters, wordToGuess: wordToGuess }) })] })] }), _jsx(Keyboard, { disabled: isWinner || isLoser, activeLetters: guessedLetters.filter(letter => wordToGuess.includes(letter)), inactiveLetters: incorrectLetters, addGuessedLetter: addGuessedLetter }), _jsxs("div", { children: [_jsx("button", { onClick: () => handleListChange(words, "english"), className: selectedLanguage === "english" ? "selected" : "", children: "English" }), _jsx("button", { onClick: () => handleListChange(italianWords, "italian"), className: selectedLanguage === "italian" ? "selected" : "", children: "Italiano" }), _jsx("button", { onClick: () => handleListChange(spanishWords, "spanish"), className: selectedLanguage === "spanish" ? "selected" : "", children: "Espa\u00F1ol" })] }), _jsxs("div", { className: "info", children: [_jsx("h2", { children: "Instruction" }), _jsx("p", { children: "Use the buttons to select the language you want to play with" }), _jsx("p", { children: "To play you can use the keyboard or the mouse to select letters and press enter to restart the game." })] })] }));
}
export default App;
