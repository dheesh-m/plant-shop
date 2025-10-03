import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
    name: 'cart',
    initialState: [],
    reducers: {
        addItem: (state, action) => {
            state.push({ ...action.payload, quantity: 1 });
        },
        increaseItem: (state, action) => {
            const item = state.find(i => i.id === action.payload);
            if (item) item.quantity += 1;
        },
        decreaseItem: (state, action) => {
            const item = state.find(i => i.id === action.payload);
            if (item && item.quantity > 1) item.quantity -= 1;
        },
        removeItem: (state, action) => state.filter(i => i.id !== action.payload),
    },
});

export const { addItem, increaseItem, decreaseItem, removeItem } = cartSlice.actions;
export default cartSlice.reducer;
