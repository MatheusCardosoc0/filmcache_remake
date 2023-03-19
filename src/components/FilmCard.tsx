import { Film } from '@/@types/FilmInterface'
import { urlImages } from '@/services/urlImages'
import React from 'react'

const FilmCard = ({ film }: { film: Film }) => {
  return (
    <div className='p-4 bg-[#959393] rounded-xl drop-shadow-[1px_1px_3px_black]'>
      <div className='w-[372px] h-[424px] rounded-xl mb-4 bg-cover bg-no-repeat'
        style={{
          backgroundImage: `url(${urlImages}${film.poster_path})`
        }}>
        {film.title}
      </div>
    </div>
  )
}

export default FilmCard