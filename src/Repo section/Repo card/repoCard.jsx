import React from 'react';
import './repocard.css';

export const RepoCard = () => {
  return (
    <div className='card'>
        <div className='infoSection'>
          <p className='title'>Name:</p>
          <p>Data</p>
        </div>
        <div className='infoSection'>
          <p className='title'>Description:</p>
          <p>Data</p>
        </div>
        <div className='infoSection'>
          <p className='title'>Language:</p>
          <p>Data</p>
        </div>
          <a href="./" className='btn'>Visit repo</a>
    </div>
  )
}
