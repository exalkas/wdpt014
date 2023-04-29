import { createContext, useReducer } from "react";

export const TodoContext = createContext([])

export function TodoProvider({children}) {

    const reducer = (state, action) => {

        switch (action.type) {
            case 'ADD':
                // const oldState = state;

                // oldState.push(action.payload)

                // return [...oldState]
                return [...state, action.payload]
            case 'DELETE':

                const oldState = state
                oldState.splice(action.payload, 1)

                return  [...oldState]
            case 'TOGGLE':

                const oldStateToggle = state
                oldStateToggle[action.payload].completed = !oldStateToggle[action.payload].completed

                return  [...oldStateToggle]
        
            default:
                return state;
        }
    }

    const [todos, dispatch] = useReducer(reducer, [])
    return <TodoContext.Provider value={{todos, dispatch}}>
        {children}
    </TodoContext.Provider>
}