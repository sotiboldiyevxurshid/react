import React from 'react'
import { useState } from 'react'
import './stule.css'

export default function Button() {

    const [count,setCount] = useState(1)
     
  return (
    <div style={{display:"flex",justifyContent:"center"}}>
    <div className='box'>
         <button onClick={() => setCount(count + 1)}>+</button>
         </div>
     <h1>men yoshim {count} da</h1>
     <div className='box'>
         <button  onClick={() => setCount(count - 1)}>-</button>
         </div>

    </div>
  )
}
