import React from 'react'
import './button.css';
import { useNavigate } from 'react-router-dom';

export const HomeButton = () => {

  const navigate = useNavigate()

  return (
    <button style={{
        'color':'white',
        'backgroundColor':'black',
        'borderRadius':'5px'
    }} onClick={()=>{navigate('/')}}>Go home</button>
  )
}
