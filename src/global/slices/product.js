import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    loading: false,
    cart: null,
    products: null,
};

export const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        setProduct: (state, action) => {
            state.product = action.payload;
        },
        setUserLoading: (state, action) => {
            state.userLoading = action.payload;
        },
        setCart: (state, action) => {
            state.cart = action.payload;
        },
    },
});

export const { setProduct, setCart, setUserLoading } = productSlice.actions;


export default productSlice.reducer;
