import axios from 'axios'

export const postauthRegister = async (values)=>{
    const addUser = await axios.post('http://localhost:3008/auth/users/signup',{...values})
}

export const fetchAccount = async() =>{
    const token = localStorage.getItem('token')
    const {data} = await axios.get('http://localhost:3008/auth/users/getaUser' , {headers:{Authorization:token}})
    return data
}


