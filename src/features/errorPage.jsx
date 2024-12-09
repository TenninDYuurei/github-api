import {useEffect} from 'react';
// import { ErrorBoundary } from 'react-error-boundary';
import { useNavigate } from 'react-router-dom';





const ErrorComp = () => {
  useEffect(()=>{
    throw new Error()
  })
}


const FallbackUi = ()=> {
  const navigate = useNavigate()

  return(
    <div style={{'color':'white'}}>Oops, an error occured. 
      <span onClick={()=>{navigate('/')}}>
        <button 
        style={{'color':'white'}}
          >Go Home</button>
      </span>
    </div>
  )
}

export {ErrorComp,FallbackUi};