import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
import "./keyboard.css";
// Define an array containing all the letters of the alphabet as keys
const keys = [
    "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m",
    "n", "ñ", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"
];
// Define the Keyboard component which takes activeLetters, inactiveLetters, addGuessedLetter, and disabled as props
function Keyboard({ activeLetters, inactiveLetters, addGuessedLetter, disabled = false, }) {
    return (_jsx("section", { className: "keyboardContainer", children: keys.map(key => {
            // Check if the current key is active or inactive
            const isActive = activeLetters.includes(key);
            const isInactive = inactiveLetters.includes(key);
            return _jsxs("button", { onClick: () => addGuessedLetter(key), className: `btnKeyboard ${isActive ? "active" : ""} ${isInactive ? "inactive" : ""}`, disabled: isInactive || isActive || disabled, children: [key, " "] }, key);
        }) }));
}
export default Keyboard;
