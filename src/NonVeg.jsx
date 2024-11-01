import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from './Store.js' 

function NonVeg() {
    const dispatch = useDispatch();
    const nonvegProducts = useSelector(state => state.products.nonVeg);

    const handleAddToCart = (product) => {
        dispatch(addToCart(product));
    }

    const items = nonvegProducts.map((product, index) => (
        <li key={index}>
            {product.name} - ${product.price.toFixed(2)}
            <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
        </li>
    ));

    return (
        <>
            <h1>Non-Veg Products</h1>
            <ul>{items}</ul>
        </>
    );
}

export default NonVeg;
