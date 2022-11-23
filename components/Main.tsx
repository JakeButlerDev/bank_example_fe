import { get } from "node:https";
import { text } from "node:stream/consumers";
import { FC, Fragment, useState } from "react";
// State has 2 parts. The current state, and the change state function
// The useState function above returns an array of [currentState, changeValue]


// prop interface goes here

const Main: FC = () => {
    // CHALLENGE
    // ADD A WAY TO DECREASE THE NUMBER (-1 BUTTON)             DONE
    // ADD ANOTHER STATE, starting value at 100                 DONE
    // CREATE 3 BUTTONS THAT EACH AFFECT 2ND STATE DIFFERENTLY          DONE
    // ADD A TEXT FIELD, AND A BUTTON THAT WILL CHANGE THE COUNTER TO THE ONE IN THE TEXT FIELD     
    // PUT ALL BUTTONS IN ONE DIV WITH FLEXBOX (remember flex-direction)            DONE


    // counter is technically a getter, setCounter is a setter
    const [counter, setCounter] = useState<number>(0);     // If counter is changed, you will not trigger a re render and will not see any new data
    const [getState, setState] = useState<number>(100);
  
    // const [wordState, setWordState] = useState({
    //     userInput:"",
    //     value: ""
    // });

    // const handleChange = (event: { target: { userInput: any; value: any; }; }) => {
    //     const {userInput, value} = event.target;
    //     setWordState((prev) => {
    //         return {...prev, [userInput]: value}
    //     })
    // };


    return (
        // <Fragment>
            <div 
            style={{      
                minHeight: "100vh",
                padding: "4rem 0",
                flex: 1,
                display: "flex",
                flexDirection: "column-reverse",
                justifyContent: "flex-start",
                alignItems: "center",
                color: "white"
            }}>
                <h1>BUTTON FUN</h1>
                <p>Counter: {counter}</p>
                {/* <p>B Counter: {getState}</p> */}

                <button onClick={() => {
                    setCounter(counter+1)
                }}>Increase Counter</button>

                {/* <button onClick={() => {
                    setCounter(counter-1)
                }}>Decrease Counter</button>

                <button onClick={() => {
                    setState(getState*2)
                }}>Logarithmic Counter</button>

                <button onClick={() => {
                    setState(getState+counter)
                }}>B Counter +Counter</button>

                <button onClick={() => {
                    setState(getState*0)
                }}>Reset B Counter</button> */}
            </div>

            // {/* <div>
            //     <h1>WORDPLAY</h1>
            //     {/* <h1>Word State: {props.wordState}</h1> */}
            //     <form>
            //         <input 
            //         type="userInput" 
            //         name="userInput" 
            //         // onChange={handleChange} 
            //         />
            //     </form>
            //     <button type="submit">Change Word State</button>
            // </div> */}
            
        // </Fragment>
    )
}

export default Main