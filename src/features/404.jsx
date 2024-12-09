import React from 'react'
import { useNavigate } from 'react-router-dom'


export const PageNotFound = () => {
    const navigate = useNavigate();
  return (
  <div style={{'margin':'2rem'}}>
    <h1 style={{'color':'white'}}>PageNotFound</h1>
    <br/>
    <button style={{
      'color':'white',
      'backgroundColor':'black',
      'border':'1px solid white'
    }}
    onClick={()=>{navigate(-1)}}>Go back</button>
  </div>
  )
}
