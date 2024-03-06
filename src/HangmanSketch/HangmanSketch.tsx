import "./hangmanSketch.css"

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

const partsOfBody = [head, body, armRight, armLeft, legRight, legLeft]



function HangmanSketch() {
    return (
        <div className="hanger-container">
            {head} 
            {body}
            {armRight}
            {armLeft}
            {legRight}
            {legLeft}
            
            <div className="rope"/>


            <div className="hanger"/>


            <div className="pole"/>


            <div className="base"/>

        </div>
    )
}

export default HangmanSketch