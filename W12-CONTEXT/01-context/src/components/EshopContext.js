import { createContext, useState } from "react";


export const EshopContext = createContext({
    cart: [],
    products: []
})

export default function EshopContextFunction({children}) {

    const [cart, setCart] = useState([])
    const [products, setProducts] = useState([])

    const addToCart = (item) => setCart([...cart, item])

    return <EshopContext.Provider value={{
        cart, products, setCart, setProducts, addToCart
    }}>
        {children}
    </EshopContext.Provider>
}