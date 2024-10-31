import React from 'react'
import { RepoCard } from './Repo card/repoCard'
import './repoSection.css';
import { PaginationComp } from '../paginationController/paginationComp';
import { useState, useEffect } from 'react';
import { Axios } from 'axios';

export const RepoSection = () => {
  const [state, setState] = useState(null);
  useEffect(()=>{
    const {data} = Axios('https://api.github.com/users/TenninDYuurei/repos');
    console.log(data)
  })
  return (

    <div style={{'background-color': 'black'}}>
      <div className='repo-section'>
          <RepoCard/>
          <RepoCard/>
          <RepoCard/>
          <RepoCard/>
          <RepoCard/>
          <RepoCard/>
      </div>
    <PaginationComp/>
    </div>
  )
}
