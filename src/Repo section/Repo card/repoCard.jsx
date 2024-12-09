import React from 'react';
import './repocard.css';

export const RepoCard = ({prop}) => {

  return (
    <div className='card'>
        <div className='infoSection'>
          <p className='title'>Name:</p>
          <p>{prop.name}</p>
        </div>
        <div className='infoSection'>
          <p className='title'>Description:</p>
          {prop.description ? <p>{prop.description}</p> : <p>This repo has no description</p>}
        </div>
        <div className='infoSection'>
          <p className='title'>Language:</p>
          {prop.language ? <p>{prop.language}</p> : <p>Empty repo</p>}
        </div>
          <a href={prop.html_url} target='blank' className='btn'>Visit repo</a>
    </div>
  )
}
