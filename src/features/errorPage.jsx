import {useEffect} from 'react';
// import { ErrorBoundary } from 'react-error-boundary';
// import { useNavigate } from 'react-router-dom';





const ErrorComp = () => {
  useEffect(()=>{
    throw new Error()
  })
}

export default ErrorComp;