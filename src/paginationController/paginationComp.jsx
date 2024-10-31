import React from 'react'
import { PgBtn } from './pgBtn'
// import { useEffect } from 'react'

export const PaginationComp = () => {

  const nextPage = ()=>{
    console.log('you went forward')
  }
  const prevPage = ()=>{
    console.log('you went backward')
  }

  return (
    <div className='paginationComp'>
        <PgBtn direction="Back" logic={prevPage}/>
        <PgBtn direction="Next" logic={nextPage}/>
    </div>
  )
}
