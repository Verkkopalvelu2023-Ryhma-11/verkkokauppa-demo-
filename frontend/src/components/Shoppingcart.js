import React, { useState, useEffect } from 'react';
import { cartSignal } from './signals';

export default function ShoppingCart(){

    const [cartItems, setCartItems] = useState([]);
    useEffect(() => {
        const onCartUpdated = (product) => {
            setCartItems(prevItems => [...prevItems, product]);
        };
        cartSignal.add(onCartUpdated);

        return () => {
            cartSignal.remove(onCartUpdated);
        };
    }, []);

        console.log(cartItems);


    return(
        <div>
        <h2>Ostoskori</h2>
        <h3>Sisältö</h3>
        <ul>
            {cartItems.map(p => (
                <li key={p.id}>
                    {p.productName} x {p.count || 1} 
                </li>
            ))}
        </ul>
    </div>
    );
}

