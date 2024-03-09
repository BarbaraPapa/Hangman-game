import "./hangmanSketch.css"


// Define JSX elements for each part of the hangman figure
const head = (
    <div className="head" />
)

const body = (
    <div className="body" />
)

const armRight = (
    <div className="armRight" />
)

const armLeft = (
    <div className="armLeft" />
)

const legRight = (
    <div className="legRight" />
)

const legLeft = (
    <div className="legLeft" />
)

// Create an array containing all parts of the hangman's body
const partsOfBody = [head, body, armRight, armLeft, legRight, legLeft]

// Define the props interface for the HangmanSketch component
type HangmanDrawingProps = {
    numberOfGuesses: number
  }


  // Define the HangmanSketch component which takes numberOfGuesses as a prop
function HangmanSketch({ numberOfGuesses }: HangmanDrawingProps) {
    return (
        <div className="hanger-container">          
           {partsOfBody.slice(0, numberOfGuesses)}            
            <div className="rope"/>
            <div className="hanger"/>
            <div className="pole"/>
            <div className="base"/>
        </div>
    )
}

export default HangmanSketch