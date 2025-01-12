//Didn't end up using this component, but didn't wanna delete it in case something broke XD


import React from 'react'
import { PgBtn } from './pgBtn'
import { useState } from 'react'
import { useEffect } from 'react'

export const PaginationComp = ({itemsOnPage, currentPage, changePage}) => {

// const [current, setCurrent] = useState(currentPage);

const [pgItemNo] = useState(itemsOnPage);

  const nextPage = (currentPage)=>{
    changePage(()=> currentPage+1)
  }

  const prevPage = (currentPage)=>{
    changePage(()=> currentPage-0)
  }

  const [disableNext, setdisableNext] = useState(true);
  const [disablePrev, setdisablePrev] = useState(true);

  useEffect(() => {
    if (currentPage>1) {
     setdisablePrev(false)
     console.log(setdisablePrev)
    }
    if (currentPage<=1) {
     setdisablePrev(true)
     console.log(setdisablePrev)
    }
    if (pgItemNo>=5) {
     setdisableNext(false)
     console.log(setdisableNext)
    }
    if (pgItemNo<5) {
     setdisableNext(true)
     console.log(setdisableNext)
    }  
  }, [currentPage, pgItemNo]);

  return (
    <div className='paginationComp'>
        <PgBtn disableBtn={disablePrev} direction="Back" logic={prevPage}/>
        <PgBtn disableBtn={disableNext} direction="Next" logic={nextPage}/>
    </div>
  )
}
