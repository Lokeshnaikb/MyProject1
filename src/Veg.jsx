import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from './Store.js' 

function Veg() {
    const dispatch = useDispatch();
    const vegProducts = useSelector(state => state.products.veg);

    const handleAddToCart = (product) => {
        dispatch(addToCart(product));
    }

    const items = vegProducts.map((product, index) => (
        <li key={index}>
            {product.name} - ${product.price.toFixed(2)}
            <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
        </li>
    ));

    return (
        <>
            <h1>Veg Products</h1>
            <ul>{items}</ul>
        </>
    );
}

export default Veg;
