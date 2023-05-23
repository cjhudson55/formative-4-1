import { useState, useEffect } from 'react'

const Posts = () => {
    const [color, setColor] = useState("red");

    const updateColor = () => {
        if (color == "red") {
            setColor(" STILL red")
        } else {
            setColor("blue")
        }
    }
    return (
        <>
            <h1>My favorite color is {color}!</h1>
            <button type="button" onClick={updateColor}>
                Blue
            </button>
            <button type="button" onClick={() => setColor("pink")}>
                Pink
            </button>
        </>
    )
}

export default Posts