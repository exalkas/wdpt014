import React, { useContext, useEffect } from 'react';
import {data} from '../01-eshop-iphones'
import { EshopContext } from './EshopContext';

function Main(props) {

    const {products, setProducts, setCart, cart, addToCart} = useContext(EshopContext)
    
    useEffect(() => {
        setProducts([...data])
    }, [])
    
    
    
    console.log("🚀 ~ cart:", cart)
    return (
        <div>
            {
                products.map((item, idx) => <div key={item.id}>{item.name} <button onClick={() => addToCart(item)}>Add to cart</button></div>)
            }
        </div>
    );
}

export default Main;