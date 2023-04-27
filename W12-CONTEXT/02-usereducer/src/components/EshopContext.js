import { createContext, useReducer, useState } from "react";
import {data} from '../01-eshop-iphones'

export const EshopContext = createContext({
    cart: [],
    products: []
})

export default function EshopContextFunction({children}) {

    // const [cart, setCart] = useState([])
    // const [products, setProducts] = useState([])

    // const addToCart = (item) => setCart([...cart, item])

    const reducer = (localState, action) => {

        switch (action.type) {
            case 'ADD_TO_CART':
            
                return {
                    ...localState,
                    cart: [...localState.cart, action.payload]
                }

            case 'REMOVE_FROM_CART':
            
                const oldCart = localState.cart

                const newCart = oldCart.filter(item => item.id !== action.payload.id)

                return {
                    ...localState,
                    cart: newCart
                }
        
            default:
                break;
        }

    }

    const [state, dispatch] = useReducer(reducer, {
        cart: [],
        products: [...data]
    })

    return <EshopContext.Provider value={{
        state, dispatch
    }}>
        {children}
    </EshopContext.Provider>
}