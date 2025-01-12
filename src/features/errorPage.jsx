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
    <div style={{'color':'white', 'margin':'1rem'}}>Oops, an error occured.
      <span onClick={()=>{navigate('/'); window.location.reload(false)}} style={{'cursor':'pointer','fontWeight':'bolder','color':'blue'}}>
        Go Home
      </span>
    </div>
  )
}

export {ErrorComp,FallbackUi};