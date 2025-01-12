import React from 'react'
import { RepoCard } from './Repo card/repoCard'
import './repoSection.css';
import { PaginationComp } from '../paginationController/paginationComp';
import { useState, useEffect } from 'react';
import axios from 'axios';
// import { PgBtn } from '../paginationController/pgBtn';
import '../paginationController/paginationBtn.css';


export const RepoSection = () => {

  const getPagesLength = (items, itemsPerPg)=>{
    return Math.ceil(items/itemsPerPg)
  }

  const [state, setState] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [repoNumber, setRepoNumber] = useState(null)
  const itemsPerPage = 6;
  const [pages,setPages] = useState()

  useEffect(()=>{
    axios.get('https://api.github.com/users/TenninDYuurei/repos')
    .then(({data})=>{return data.length})
    .then(number=> {setRepoNumber(number)})
    .catch((error) => {
      console.error('Error fetching repository count:', error);
    });
  },[])

  useEffect(() => {
    if (repoNumber !== null) {
      setPages(getPagesLength(repoNumber, itemsPerPage));
      // console.log(repoNumber);
    }
  }, [repoNumber]);
  
  useEffect(() => {
  axios.get(`https://api.github.com/users/TenninDYuurei/repos?per_page=${itemsPerPage}&page=${currentPage}`)
      .then((response) => {
        setState(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, [currentPage]);
  // const changePage = (newPage)=> setCurrentPage(newPage)

  const prevPage = (current)=>{
    if(current>1){
      // console.log(currentPage)
      setCurrentPage(current-=1)
    }
    // else{
    //   window.alert('You are at the first page!')
    // }
  }
  const nextPage = (current)=>{
    if(current<pages){
      // console.log(currentPage)
      setCurrentPage(current+=1)
    }
    // else{
    //   window.alert('you are at the last page')
    // }
  }
  
  
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
  // console.log(state.length)
  return (
    <div className='container' style={{ 'backgroundColor': 'black' }}>
      <div className='repo-section'>
        {children}
      </div>
      {/* <PaginationComp itemsOnPage={state.length} currentPage={currentPage} changePage={changePage} /> */}
      <div className='paginationComp'>
        <button  className='pag' onClick={()=>{prevPage(currentPage)}}>Back</button>
        <button  className='pag' onClick={()=>{nextPage(currentPage)}}>Next</button>
    </div>
    </div>
  );
 
  
 
}
