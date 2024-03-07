import { jsx as _jsx } from "react/jsx-runtime";
import "./keyboard.css";
const keys = [
    "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m",
    "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"
];
function Keyboard({ activeLetters, inactiveLetters, addGuessedLetter, disabled = false, }) {
    return (_jsx("section", { className: "keyboardContainer", children: keys.map(key => {
            const isActive = activeLetters.includes(key);
            const isInactive = inactiveLetters.includes(key);
            return _jsx("button", { onClick: () => addGuessedLetter(key), className: `btnKeyboard ${isActive ? "active" : ""} ${isInactive ? "inactive" : ""}`, disabled: isInactive || isActive || disabled, children: key }, key);
        }) }));
}
export default Keyboard;
