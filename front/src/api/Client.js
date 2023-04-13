import axios from 'axios'


export const fetchAccounts = async()=>{
    const {data} = await axios.get('http://localhost:3008/auth/users/getAll')
    return data 
}
