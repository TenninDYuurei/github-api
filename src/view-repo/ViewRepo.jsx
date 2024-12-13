import React, { useEffect, useState } from 'react';
import './View-Repo.css';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


export const ViewRepo = () => {
  const navigate = useNavigate();
  const {name} = useParams();
  const url = `https://api.github.com/repos/TenninDYuurei/${name}`
  const [state, setState] = useState()
  useEffect(()=>{
    const fetchData = async()=>{
      axios.get(url).then((response)=>{
        setState(response.data);
      }).catch((error)=> {
      console.error('Error fetching repository data:', error);
      // return null;
    })
    console.log(state);
    }
    fetchData()
  },[url])

  if(!state){
    return (
      <div className='view-repo'>
          <h2>Name</h2>
          <p> <span>Detail</span>Repo Detail</p>
          <p> <span>Detail</span>Repo Detail</p>
          <p> <span>Detail</span>Repo Detail</p>
          <p> <span>Detail</span>Repo Detail</p>
      </div>
    )
  }

  return (
    <div className='view-repo'>
        <h2>{state.name}</h2>
        <div className='repo-details'><p>Owner:</p><p>{state.owner.login}</p></div>
        {state.description ? <div className='repo-details'><p>Description:</p><p>{state.description}</p></div> : null}
        <div className='repo-details'><p>Created at:</p><p>{state.created_at}</p></div>
        <div className='repo-details'><p>Visibility:</p><p>{state.visibility}</p></div>
        <div className='repo-details'><p>Language:</p><p>{state.language}</p></div>
        <button onClick={()=>{navigate(-1)}}>Back</button>
    </div>
  )
}
