import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import "./hangmanSketch.css";
const head = (_jsx("div", { className: "head" }));
const body = (_jsx("div", { className: "body" }));
const armRight = (_jsx("div", { className: "armRight" }));
const armLeft = (_jsx("div", { className: "armLeft" }));
const legRight = (_jsx("div", { className: "legRight" }));
const legLeft = (_jsx("div", { className: "legLeft" }));
const partsOfBody = [head, body, armRight, armLeft, legRight, legLeft];
function HangmanSketch({ numberOfGuesses }) {
    return (_jsxs("div", { className: "hanger-container", children: [partsOfBody.slice(0, numberOfGuesses), _jsx("div", { className: "rope" }), _jsx("div", { className: "hanger" }), _jsx("div", { className: "pole" }), _jsx("div", { className: "base" })] }));
}
export default HangmanSketch;
