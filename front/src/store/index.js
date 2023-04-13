import { configureStore } from '@reduxjs/toolkit'
import adminSlice from './adminSlice'
import clienSlice from './clientSlice'
import productSlice from './productSlice'
export default configureStore({
    reducer:{
        admin : adminSlice,
        client : clienSlice,
        product : productSlice
    }
})