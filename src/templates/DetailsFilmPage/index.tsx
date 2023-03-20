import React from 'react'
import DetailsContainer from './DetailsContainer'
import RecomendedFilms from './RecomendedFilms'



const DetailsFilmPage = () => {
  return (
    <div className='bg-[#cbc7c7] w-full flex'>
      <DetailsContainer />
      <RecomendedFilms />
    </div>
  )
}

export default DetailsFilmPage