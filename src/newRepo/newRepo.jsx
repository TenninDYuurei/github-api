import React from 'react'
import './newRepo.css';
import { useNavigate } from 'react-router-dom';


export const NewRepo = () => {
    const navigate = useNavigate()


  return (
    <div className='repo-info'>
        <div className="card">
            <button onClick={navigate('/')}>Go home</button>
            <div className='new-repo-details'>
                <p><span className='bold'>Repo Name:</span> Name</p>
                <p><span className='bold'>Repo Description:</span> Description</p>
                <p><span className='bold'>Repo Description:</span> Description</p>
                <p><span className='bold'>Repo Description:</span> Description</p>
                <p><span className='bold'>Repo Description:</span> Description</p>
                <p><span className='bold'>Repo Description:</span> Description</p>
            </div>
            <button>Delete Repo</button>
        </div>
    </div>
  )
}
