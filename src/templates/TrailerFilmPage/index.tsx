import RecomendedFilms from '@/components/RecomendedFilms'
import React from 'react'
import TrailerContainer from './TrailerContainer'

const TrailerFilmPage = () => {
  return (
    <div className='flex w-full bg-[#007076]'>
      <TrailerContainer />
      <RecomendedFilms />
    </div>
  )
}

export default TrailerFilmPage