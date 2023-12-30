import { configureStore } from '@reduxjs/toolkit';

import products from './slices/product';

export const store = configureStore({
    reducer: {
        products,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});
