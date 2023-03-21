import { useDataContext } from '@/context/DataContext'
import { api, getApiTrailer } from '@/services/axiosConfig'
import React, { useEffect } from 'react'

const TrailerContainer = () => {

  const {currentFilm} = useDataContext()

  async function teste(){
    const a  = await getApiTrailer(currentFilm.id)

    console.log(a)
  }

  useEffect(() => {
    teste()
  },[])

  return (
    <div className='mr-[30%] w-full justify-center text-center'>
      {currentFilm.title}
    </div>
  )
}

export default TrailerContainer