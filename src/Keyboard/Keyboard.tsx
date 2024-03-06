import "./keyboard.css"

const keys = [
  "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m",
  "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"
];

 function Keyboard() {
  return (
    <section className="keyboard-container">
        {keys.map(key=>{
          return <button key={key}>{key}</button>
        })}
    </section>
  )
}

export default Keyboard