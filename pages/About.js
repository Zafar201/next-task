import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchName } from '../store/action/postAction'

function About() {
    const {names}= useSelector(state=>state.name)
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(fetchName())
    },[dispatch])
    return (
        <div>
          <h1>Names coming from redux store:-</h1>
           
      {names && names.map(item=>(
          <h1 key={item}>{item}</h1>
        ))}

        </div>
    )
}

export default About
