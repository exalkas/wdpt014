import { createContext, useReducer } from "react";

export const ThemeContext = createContext('light')

export default function ThemeProvider({children}) {

    const reducer = (state, action) => {

        switch (action.type) {
            case 'TOGGLE':

            // if (state === 'light') {
            //     return 'dark'
            // } else {
            //     return 'light'
            // }
                // state === 'light' ? 'dark' : 'light'
                // console.log("🚀 ~ state:", state)
                
                return state === 'light' ? 'dark' : 'light'
        
            default:
                return state;
        }
    }

    const [theme, dispatch] = useReducer(reducer, 'light')

    return <ThemeContext.Provider value={{theme, dispatch}}>
        {children}
    </ThemeContext.Provider>
    
}