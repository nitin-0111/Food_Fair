import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    products: [],
};
export const cartSlice = createSlice(
    {
        name: "cart",
        initialState,
        reducers: {
            addToCart: (state, action) => {
                const item = state.products.find((item) => (item.id === action.payload.id));
                if (item) {
                    item.quantity += action.payload.quantity;
                }
                else {
                    state.products.push(action.payload);
                }
            },
            removeItem: (state, action) => {
                state.products = state.products.filter((item) => item.id !== action.payload);
            },
            emptyCart: (state) => {
                state.products = []
            },

        },
    }
);

export const { addToCart, removeItem, emptyCart } = cartSlice.actions;

export default cartSlice.reducer;