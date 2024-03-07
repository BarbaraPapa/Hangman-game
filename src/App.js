import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import "./app.css";
import { useState, useEffect, useCallback } from "react";
import words from "./wordList.json";
import HangmanSketch from "./HangmanSketch/HangmanSketch";
import HangmanWord from "./HangmanWord/HangmanWord";
import Keyboard from "./Keyboard/Keyboard";
function getWord() {
    return words[Math.floor(Math.random() * words.length)];
}
function App() {
    const [wordToGuess, setWordToGuess] = useState(getWord);
    const [guessedLetters, setGuessedLetters] = useState([]);
    const incorrectLetters = guessedLetters.filter(letter => !wordToGuess.includes(letter));
    const isLoser = incorrectLetters.length >= 6;
    const isWinner = wordToGuess
        .split("")
        .every(letter => guessedLetters.includes(letter));
    const addGuessedLetter = useCallback((letter) => {
        if (guessedLetters.includes(letter) || isWinner || isLoser)
            return;
        setGuessedLetters(currentLetters => [...currentLetters, letter]);
    }, [guessedLetters, isWinner, isLoser]);
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
    useEffect(() => {
        const handler = (e) => {
            const key = e.key;
            if (key !== "Enter")
                return;
            e.preventDefault();
            setGuessedLetters([]);
            setWordToGuess(getWord());
        };
        document.addEventListener("keypress", handler);
        return () => {
            document.removeEventListener("keypress", handler);
        };
    }, []);
    return (_jsxs("div", { children: [_jsxs("main", { children: [_jsx(HangmanSketch, { numberOfGuesses: incorrectLetters.length }), _jsxs("section", { children: [_jsxs("h1", { className: isWinner || isLoser ? "appear" : "", children: [isWinner && "You Won! 🎉", isLoser && "You Lose 🫣"] }), _jsx("div", { children: _jsx(HangmanWord, { reveal: isLoser, guessedLetters: guessedLetters, wordToGuess: wordToGuess }) })] })] }), _jsx(Keyboard, { disabled: isWinner || isLoser, activeLetters: guessedLetters.filter(letter => wordToGuess.includes(letter)), inactiveLetters: incorrectLetters, addGuessedLetter: addGuessedLetter }), _jsxs("div", { className: "info", children: [_jsx("h2", { children: "Instruction" }), _jsx("p", { children: "To play you can use the keyboard to select letters and press enter to restart the game." }), _jsx("p", { children: "Or you can use the mouse to select letters and refresh the page to restart the game." })] })] }));
}
export default App;
