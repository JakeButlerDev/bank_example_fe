import { text } from "node:stream/consumers";
import { FC, Fragment, useState } from "react";
// State has 2 parts. The current state, and the change state function
// The useState function above returns an array of [currentState, changeValue]


// prop interface goes here

const Main: FC = () => {
    // CHALLENGE
    // ADD A WAY TO DECREASE THE NUMBER (-1 BUTTON)
    // ADD ANOTHER STATE, starting value at 100
    // CREATE 3 BUTTONS THAT EACH AFFECT 2ND STATE DIFFERENTLY
    // ADD A TEXT FIELD, AND A BUTTON THAT WILL CHANGE THE COUNTER TO THE ONE IN THE TEXT FIELD
    // PUT ALL BUTTONS IN ONE DIV WITH FLEXBOX (remember flex-direction)


    // counter is technically a getter, setCounter is a setter
    const [counter, setCounter] = useState<number>(0);     // If counter is changed, you will not trigger a re render and will not see any new data

    return (
        <Fragment>
            <div>
                <h1>ADD</h1>
                <p>Counter: {counter}</p>
                <button onClick={() => {            // Multi line function
                    setCounter(counter+1)
                }}>Click ME!</button>
            </div>
            <div>
                <h1>MINUS</h1>
                <p>Counter: {counter}</p>
                <button onClick={() => {
                    setCounter(counter-1)
                }}>Click ME!</button>
            </div>
            <div>
                <h1>BONUS</h1>
                <p>Counter: {counter}</p>
                <form onSubmit={() => {
                    setCounter(counter-1)
                }}>
                    <input></input>
                </form>
            </div>
        </Fragment>
    )
}

export default Main