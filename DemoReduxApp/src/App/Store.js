import { configureStore } from '@reduxjs/toolkit'
import Todoslice from '../Featurs/Todo/Todoslice'
import { getDefaultMiddleware } from '@reduxjs/toolkit';


export const Store = configureStore({
    reducer:
    {
        todo: Todoslice,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({

            serializableCheck: false,
        }),
})
