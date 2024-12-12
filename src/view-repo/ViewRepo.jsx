import React from 'react';
import './View-Repo.css';
import { useParams } from 'react-router-dom';



export const ViewRepo = () => {
    const {name} = useParams();
  return (
    <div className='view-repo'>
        <h2>{name}</h2>
        <p> <span>Detail</span>Repo Detail</p>
        <p> <span>Detail</span>Repo Detail</p>
        <p> <span>Detail</span>Repo Detail</p>
        <p> <span>Detail</span>Repo Detail</p>
    </div>
  )
}
