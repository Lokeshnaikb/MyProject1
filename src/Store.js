// store.js
import { configureStore, createSlice } from '@reduxjs/toolkit';

// Product Slice
const productSlice = createSlice({
    name: 'products',
    initialState: {
        veg: [
            { name: 'Tomato', price: 60.2 },
            { name: 'Potato', price: 80.31 },
            { name: 'Brinjal', price: 100.0 },
            { name: 'Onion', price: 200.0 },
            { name: 'Chillies', price: 120.0 },
        ],
        nonVeg: [
            { name: 'Chicken', price: 260.2 },
            { name: 'Mutton', price: 800.31 },
            { name: 'Fish', price: 250.0 },
            { name: 'Prawns', price: 200.0 },
            { name: 'Crabs', price: 180.0 },
        ],
    },
    reducers: {}
});

// Cart Slice
const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [],
        discount: 0
    },
    reducers: {
        addToCart: (state, action) => {
            const item = action.payload;
            const existingItem = state.items.find(cartItem => cartItem.name === item.name);

            if (existingItem) {
                existingItem.quantity += 1; 
            } else {
                state.items.push({ ...item, quantity: 1 });
            }
        },
        increment: (state, action) => {
            const item = state.items.find(cartItem => cartItem.name === action.payload.name);
            if (item) item.quantity += 1;
        },
        decrement: (state, action) => {
            const item = state.items.find(cartItem => cartItem.name === action.payload.name);
            if (item && item.quantity > 1) {
                item.quantity -= 1;
            } else if (item) {
                state.items = state.items.filter(cartItem => cartItem.name !== item.name);
            }
        },
        removeFromCart: (state, action) => {
            state.items = state.items.filter(cartItem => cartItem.name !== action.payload.name);
        },
        applyDiscount: (state, action) => {
            state.discount = action.payload;
        }
    }
});

export const { addToCart, increment, decrement, removeFromCart, applyDiscount } = cartSlice.actions;

const store = configureStore({
    reducer: {
        products: productSlice.reducer,
        cart: cartSlice.reducer,
    }
});

export default store;
