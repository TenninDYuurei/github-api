import React from 'react'
import './createRepo.css';
// import {NormalButton} from '../features/normalButton'
import { HomeButton } from '../features/homeButton';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


export const CreateRepo = () => {

  let navigate = useNavigate()

  const [formDetail, setFormDetail] = useState({name:"name", description:'description'})

  const changeRepoName = (event)=>{
    setFormDetail((formDetail)=>{
      let newState = {...formDetail}
      console.log(newState)
      // newState[Name] = event.target.value
      // setFormDetail(newState)
      // return newState
    })
    console.log(formDetail)
  }
  const changeRepoDesc = (event)=>{
    // setFormDetail((formDetail)=>{
      // let newState = {...prevState}
      // newState.Description = event.target.value
      // setFormDetail(newState)
      // return newState
    // })
    console.log(formDetail)
  }
//  const onClick = (data)=>{
//   navigate('/view-new-repo')
//   // console.log(data)
//  }

  return (
    

    <div className='container'>
      <form className='inputForm'>
          <h1>Create a new repo</h1>
          <div className='card-detail'>
              <label for="RepoName" className="title">Repo Name</label>
              <input type="text" 
              name="RepoName" 
              id="" 
              onChange={changeRepoName}/>
          </div>
          <div className='card-detail'>
              <label for="RepoDescription" className="title">Repo Description</label>
              <input type="text" 
              name="RepoDescription" 
              id="" 
              onChange={changeRepoDesc}/>
          </div>
          <div className='btn-section'>
            <HomeButton/>
            <button className='create-repo-btn'
              onClick={()=>{navigate('/view-new-repo')}}
              >Create Repo</button>
          </div>
      </form>
    </div>
  )
}
