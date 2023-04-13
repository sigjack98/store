import { createSlice } from '@reduxjs/toolkit';



const adminSlice = createSlice({
    name:'admin',
    initialState:{
        _id: "hasssibdklsk",
        name : 'Firas',
        email:'eljedfiras1102@gmail.com',
        age : 24,
        password:'123456789',
        address : 'Sfax Tunisia',
        role:'Admin'
    },
    reducers:{
        setUser:(state,action)=>{
            return action.payload
        }
    }
})

export const {setAdmin} = adminSlice.actions
export default adminSlice.reducer