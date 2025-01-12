import axios from 'axios';
import React, {createRef} from 'react';
import './createRepo.css';
// import {NormalButton} from '../features/normalButton'
import { HomeButton } from '../features/homeButton';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


export const CreateRepo = () => {

  let navigate = useNavigate()

  const [formDetail, setFormDetail] = useState({repoName:'',repoDescription:''});
  const token = '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'
  const formRef = createRef()
  const [error, setError] = useState('');


  const handleChange = (e)=>{
    const {name,value} = e.target;
    setFormDetail({...formDetail,[name]:value})
    if (/\s|[-!$%^&*()_+|~=`{}\[\]:";'<>?,.\/]/.test(value)) {
      setError('Repository name should not contain spaces, hyphens, or special characters.');
      return;
    }else{
      setError(null)
    }
  }

  const submitData = (event)=>{
    event.preventDefault()
    const { repoName, repoDescription } = formDetail;
    if (!repoDescription || !repoName) {
        window.alert('Please fill out all the fields')
        return
      }
    
    axios.post('https://api.github.com/user/repos', {
      name: repoName,
      description: repoDescription,
    }, {
      headers: {
        Authorization: `token ${token}`,
        'Content-Type': 'application/json'
      }
    })
    .then((response) => {
      navigate(`/view-new-repo/${repoName}`)
      console.log(response.data)
    })
    .catch((error) => {
      console.error('Error creating repository:', error);
    });
    formRef.current.reset()
  }
  
  
 
  return (
    <div className='container'>
      <form className='inputForm' ref={formRef}>
          <h1>Create a new repo</h1>
          <div className='card-detail'>
              <label htmlFor="repoName" className="title">Repo Name</label>
              <input type="text" 
              name="repoName" 
              id="" 
              required={true}
              onChange={handleChange}/>
          </div>
          <div className='card-detail'>
              <label htmlFor="repoDescription" className="title">Repo Description</label>
              <input type="text" 
              name="repoDescription" 
              id="" 
              required={true}
              onChange={handleChange}/>
          </div>
          <div className='btn-section'>
            <HomeButton/>
            <button className='create-repo-btn'
              type='button'
              onClick={submitData}
              style={{'cursor':'pointer'}}
              disabled={!error ? false : true}
              >Create Repo</button>
          </div>
          <h2 className='error' style={error ? {'visibility':'visible'} : {'visibility':'hidden'}}>{error}</h2>
      </form>
    </div>
  )
}
