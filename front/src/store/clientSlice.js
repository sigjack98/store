//creation du sliceclient pout l'importation de data frontend
import { createSlice } from '@reduxjs/toolkit'
import { v4 as uuidv4 } from 'uuid';


const clienSlice = createSlice({
    name:'client',
    initialState:[{
        id:uuidv4(),
        name : 'Ahmed',
        email:'tngeek007@gmail.com',
        age : 22,
        password:'123456789',
        address : 'Zaghouan Tunisia',
        role:'user'
    },
    {
        id:uuidv4(),
        name : 'Hassine',
        email:'hassineguidara@gmail.com',
        age : 21,
        password:'Hasine123',
        address : 'Sousse unisia',
        role:'user'
    }],
    reducers:{
        setClient:(state,action)=>{
            return action.payload
        }
    }
})

export const {setClient} = clienSlice.actions
export default clienSlice.reducer