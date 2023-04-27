import React, { useContext } from 'react';
import { EshopContext } from './EshopContext';

function Header(props) {

    const {state} = useContext(EshopContext)

    return (
        <div>
            In the cart there are {state.cart.length} products
        </div>
    );
}

export default Header;