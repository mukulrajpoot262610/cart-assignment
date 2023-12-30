import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    loading: false,
    items: [],
    products: null,
    favorites: [],
};

export const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        setProduct: (state, action) => {
            state.products = action.payload;
        },
        setUserLoading: (state, action) => {
            state.loading = action.payload;
        },
        addItem: (state, action) => {
            const { quantity, product, id } = action.payload;
            const existingItem = state.items.find(item => item.id === id);

            if (existingItem) {
                existingItem.quantity += quantity;
            } else {
                state.items.push({ quantity, product, id });
            }
        },
        removeItem: (state, action) => {
            const itemId = action.payload;
            state.items = state.items.filter(item => item.id !== itemId);
        },
        updateQuantity: (state, action) => {
            const { id, quantity } = action.payload;
            const existingItem = state.items.find(item => item.id === id);

            if (existingItem) {
                existingItem.quantity = quantity;
            }
        },
        toggleFavorite: (state, action) => {
            const itemId = action.payload;
            const existingItem = state.favorites.find(item => item.id === itemId);

            if (existingItem) {
                state.favorites = state.favorites.filter(item => item.id !== itemId);
            } else {
                state.favorites.push(state.products.find(item => item.id === itemId));
            }
        },
        clearCart: state => {
            state.items = [];
        },
    },
});

export const { setProduct, setUserLoading, addItem, removeItem, updateQuantity, clearCart, toggleFavorite } = productSlice.actions;


export default productSlice.reducer;
