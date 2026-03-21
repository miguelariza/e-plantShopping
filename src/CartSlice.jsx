import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {
    addItem: (state, action) => {
        const item = state[action.payload];
        if(item) {
            item.quantity++;
        }
    },
    removeItem: (state, action) => {
        const item = state[action.payload];
        if(item && item.quantity > 0) {
            item.quantity--;
        }
    },
    updateQuantity: (state, action) => {

    
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;
