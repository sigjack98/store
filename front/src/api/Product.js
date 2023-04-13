import axios from 'axios'


export const fetchProducts = async()=>{
    const {data} = await axios.get('http://localhost:3008/api/products/')
    return data 
}

export const fetchProductsByUserId = async(userId)=>{
    const {data} = await axios.get(`http://localhost:3008/api/products/getProductsByUserId/${userId}`)
    return data 
}


