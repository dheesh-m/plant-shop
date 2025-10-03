import React from 'react';
import { useSelector } from 'react-redux';

function Header({ navigate }) {
    const cart = useSelector(state => state.cart);
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

    return (
        <header>
            <h1 onClick={() => navigate('landing')} style={{cursor:'pointer'}}>Houseplants Store</h1>
            <nav>
                <button onClick={() => navigate('products')}>Products</button>
                <button onClick={() => navigate('cart')}>
                    Cart ({totalItems})
                </button>
            </nav>
        </header>
    );
}

export default Header;
