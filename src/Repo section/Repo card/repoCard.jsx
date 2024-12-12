import React from 'react';
import './repocard.css';
import {Link} from 'react-router-dom';


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
          <Link to={`/view-repo/${prop.name}`}   className='btn'>Visit repo</Link>
    </div>
  )
}
