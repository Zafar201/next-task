import axios from 'axios'
import * as types from '../type'


export const fetchposts=()=>async dispatch=>{
    const res=await axios.get('https://fakestoreapi.com/products/1')
    dispatch({
        type:types.GET_DATA,
        payload:res.data
    })
 
}