import axios from 'axios'
import * as types from '../type'


export const fetchData=()=>async dispatch=>{
    const res=await axios.get('https://fakestoreapi.com/products/1')
    dispatch({
        type:types.GET_DATA,
        payload:res.data
    })
 
}


export const fetchName=()=>async dispatch=>{
    dispatch({
        type:types.GET_NAMES,
        payload:["zafar","salman","naved"]
    })
}