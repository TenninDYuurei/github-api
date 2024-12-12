import React from 'react'
import { RepoCard } from './Repo card/repoCard'
import './repoSection.css';
import { PaginationComp } from '../paginationController/paginationComp';
import { useState, useEffect } from 'react';
import axios from 'axios';



export const RepoSection = () => {



  const [state, setState] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  useEffect(() => {
    axios.get(`https://api.github.com/users/TenninDYuurei/repos?per_page=${itemsPerPage}&page=${currentPage}`)
      .then((response) => {
        setState(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, [currentPage]);
  const changePage = (newPage)=> setCurrentPage(newPage)

  if (!state) {
    return (
      <div className='bg' style={{ 'backgroundColor': 'black' }}>
        <div className='repo-section'>
          <p style={{'color':'white'}}>Loading...</p>
        </div>
        <PaginationComp/>
      </div>
    );
  }

  const children = state.map((data) => <RepoCard key={data.id} prop={data} />);
  console.log(state.length)
  return (
    <div className='container' style={{ 'backgroundColor': 'black' }}>
      <div className='repo-section'>
        {children}
      </div>
      <PaginationComp itemsOnPage={state.length} currentPage={currentPage} changePage={changePage} />
    </div>
  );
 
  
 
}
