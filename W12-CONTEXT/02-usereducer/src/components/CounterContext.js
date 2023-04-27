import { createContext, useState, useReducer } from "react";

export const CounterContext = createContext()

export default function EshopFunctionContext(props) {

    // const [counter, setCounter] = useState(0)

    // const increase = () => setCounter(counter + 1)
    // const decrease = () => setCounter(counter - 1)

    // action is an object. this object has usually 1 or 2 properties
    // the first we will use is called type
    const reducer = (state, action) => {

        switch (action.type) {
            case 'INCREMENT':
                
                return state + 1;
            
            case 'DECREMENT':
                return state - 1;
            
            case 'MULTIPLY':
                return state  * 2;
            case 'DIVIDE':
                return state  / 2;
            default:
                return state;
        }

    }

    // useReducer(reducer, initialstate)
    const [counter, dispatch] = useReducer(reducer, 0)

    return <CounterContext.Provider value={{
        counter, 
        dispatch
    }}>
        {props.children}
    </CounterContext.Provider>

}
