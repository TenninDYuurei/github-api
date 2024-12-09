import React from 'react'
import './button.css'


export const NormalButton = ({text, bgcolor, color}) => {
  return (
    <button style={{'backgroundColor':bgcolor, 
                    'borderRadius':'5px',
                    'color':color}}>{text}</button>
  )
}
