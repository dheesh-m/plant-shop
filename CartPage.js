import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increaseItem, decreaseItem, removeItem } from '../redux/cartSlice';

function CartPage() {
    const cart = useSelector(state => state.cart);
    const dispatch = useDispatch();

    const totalCost = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

    return (
        <div className="cart-page">
            <h2>Shopping Cart</h2>
            <p>Total Items: {cart.reduce((sum, item) => sum + item.quantity, 0)}</p>
            <p>Total Cost: ${totalCost}</p>
            {cart.map(item => (
                <div key={item.id} className="cart-item">
                    <img src={item.img} alt={item.name} />
                    <p>{item.name}</p>
                    <p>${item.price}</p>
                    <button onClick={() => dispatch(increaseItem(item.id))}>+</button>
                    <button onClick={() => dispatch(decreaseItem(item.id))}>-</button>
                    <button onClick={() => dispatch(removeItem(item.id))}>Delete</button>
                </div>
            ))}
            <button onClick={() => alert('Coming Soon')}>Checkout</button>
        </div>
    );
}

export default CartPage;
