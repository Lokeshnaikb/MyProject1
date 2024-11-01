// Cart.js
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, removeFromCart, applyDiscount } from './store';

function Cart() {
    const cartItems = useSelector(state => state.cart.items);
    const discount = useSelector(state => state.cart.discount);
    const dispatch = useDispatch();
    
    const [couponCode, setCouponCode] = useState("");

    // Calculate total price before discount
    const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    
    // Calculate discount amount and final price
    const discountAmount = totalPrice * (discount / 100);
    const finalPrice = totalPrice - discountAmount;

    // Handle applying coupon
    const handleApplyCoupon = () => {
        const couponDiscounts = {
            "Lokesh10": 10,
            "Lokesh20": 20,
            "Lokesh30": 30
        };
        
        if (couponDiscounts[couponCode]) {
            dispatch(applyDiscount(couponDiscounts[couponCode]));
        } else {
            alert("Invalid coupon code. Try Manoj10, Manoj20, or Manoj30.");
        }
    };

    const cartList = cartItems.map((item, index) => (
        <li key={index}>
            {item.name} - ${item.price.toFixed(2)} (Quantity: {item.quantity})
            <button onClick={() => dispatch(increment(item))}>+1</button>
            <button onClick={() => dispatch(decrement(item))}>-1</button>
            <button onClick={() => dispatch(removeFromCart(item))}>Remove</button>
        </li>
    ));

    return (
        <>
            <h2>Cart</h2>
            <ul>{cartList}</ul>

            <h3>Cart Summary</h3>
            <p>Total Amount Before Discount: ${totalPrice.toFixed(2)}</p>
            <p>Discount: {discount}% (-${discountAmount.toFixed(2)})</p>
            <p>Final Price: ${finalPrice.toFixed(2)}</p>

            <div>
                <h4>Apply Coupon Code:</h4>
                <input 
                    type="text" 
                    value={couponCode} 
                    onChange={(e) => setCouponCode(e.target.value)} 
                    placeholder="Enter coupon code" 
                />
                <button onClick={handleApplyCoupon}>Apply Coupon</button>
            </div>
        </>
    );
}

export default Cart;
