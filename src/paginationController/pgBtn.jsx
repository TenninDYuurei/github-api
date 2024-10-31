import React from 'react';
import './paginationBtn.css';


export const PgBtn = ({direction, logic}) => {
  return (
    <button  onClick={logic}>{direction}</button>
  )
}