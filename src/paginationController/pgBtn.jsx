import React from 'react';
import './paginationBtn.css';


export const PgBtn = ({disableBtn, direction, logic}) => {
  return (
    <button  disabled={disableBtn} onClick={logic}>{direction} <br/> {[disableBtn]}</button>
  )
}