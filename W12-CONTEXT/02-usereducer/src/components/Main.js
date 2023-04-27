import React, { useContext, useEffect } from 'react';

import { EshopContext } from './EshopContext';

function Main(props) {

    const {state, dispatch} = useContext(EshopContext)
    
    
    console.log("🚀 ~ state:", state)
    return (
        <div>
            {
                state.products.map((item, idx) => <div key={item.id}>{item.name}            <button onClick={() => dispatch({
                    type: 'ADD_TO_CART',
                    payload: item
                })}>Add to cart</button>

                <button onClick={() => dispatch({
                    type: 'REMOVE_FROM_CART',
                    payload: item
                })}>Remove from Cart</button>
            
            </div>
                
            )
            }
        </div>
    );
}

export default Main;