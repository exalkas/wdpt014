import React, { useContext } from 'react';
import { EshopContext } from './EshopContext';

function Header(props) {

    const {cart} = useContext(EshopContext)

    return (
        <div>
            In the cart there are {cart.length} products
        </div>
    );
}

export default Header;