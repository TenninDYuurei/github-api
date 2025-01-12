import React from 'react'
import axios from 'axios';
import './newRepo.css';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

export const NewRepo = () => {

  const navigate = useNavigate()
  const {repoName} = useParams();

  const url = `https://api.github.com/repos/TenninDYuurei/${repoName}`

  const token = process.env.REACT_APP_GITHUB_TOKEN

  const [state, setState] = useState()

  useEffect(()=>{ 
      axios.get(url).then(({data})=>{
        setState(data);
      }).catch((error)=> {
      console.error('Error fetching repository data:', error);
      // return null;
    })
  },[repoName, url])

  const deleteRepo = async () => {
    try {
      await axios.delete(url, {
        headers: {
          Authorization: `token ${token}`,
          'Content-Type': 'application/json'
        }
      });
      console.log('Repository deleted successfully');
      navigate('/'); 
    } catch (error) {
      console.error('Error deleting repository:', error);
    }
  };

  if (state) {
    return (
      <div className='repo-info'>
          <div className="card">
              <button onClick={()=>{navigate('/')}}>Go home</button>
              <div className='new-repo-details'>
                  <p><span className='bold'>Name:</span> {state.name}</p>
                  <p><span className='bold'>Description:</span> {state.description}</p>
                  <p><span className='bold'>Created at:</span> {state.created_at}</p>
                  {/* <p><span className='bold'>Language:</span> {state.language}</p> */}
              </div>
              <button onClick={deleteRepo}>Delete Repo</button>
          </div>
      </div>
    )
  }
  return (
    <div className='repo-info'>
          <div className="card">
              <button onClick={()=>{navigate('/')}}>Go home</button>
              <div className='new-repo-details'>
                  <p><span className='bold'>Name:</span> Name</p>
                  <p><span className='bold'>Description:</span> Description</p>
                  <p><span className='bold'>Created at:</span> Date of creation</p>
                  {/* <p><span className='bold'>Language:</span> {state.language}</p> */}
              </div>
              <button>Delete Repo</button>
          </div>
      </div>
  )
}
