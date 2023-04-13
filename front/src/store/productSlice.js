//creation du productslice pout l'importation de data frontend
import { createSlice } from '@reduxjs/toolkit'
import { v4 as uuidv4 } from 'uuid';


const productSlice = createSlice({
    name:"Product",
    initialState:[{
        id:uuidv4(),
        name : 'Men',
        image:'#',
        price : 26,
        description:'Clothes',
        
    },
    {
        id:uuidv4(),
        name : 'Women',
        image:'#',
        price : 44,
        description:'Women Clothes',
        
    }],
    reducers:{
        setProduct:(state,action)=>{
            return action.payload
        }
    }
})

export const {setProduct} = productSlice.actions
export default productSlice.reducer