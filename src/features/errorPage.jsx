import React, { Component, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';

export default class ErrorBoundary extends Component {
    constructor(props){
        super(props);
        this.state = {hasError: false}
    }
    static getDerivedStateFromError(error){
      console.log("error works", error)
      return {hasError:true}
    }
    componentDidCatch(err, info){
      console.log(err)
    }


  render() {
      // const navigate = useNavigate();
    if (this.state.hasError) {
        return (
          <>
            <h1>Something went wrong
            {/* <button onClick={()=>{this.navigate(-1)}}>Go back</button> */}
            </h1>
          </>
        )
    }
    return this.props.children   
  }
}



export const ErrorComp = () => {
  
  useEffect(()=>{
  throw new Error()
  })
  // return (
  //   <div>errorPage</div>
  // )
}
