import { Film } from '@/@types/FilmInterface'
import { urlImages } from '@/services/urlImages'
import React from 'react'
import { Press, Title } from './GlobalElements'

const FilmCard = ({ film }: { film: Film }) => {
  return (
    <div className='p-4 bg-[#959393] rounded-xl drop-shadow-[1px_1px_3px_black]'>
      <div className='w-[200px] h-[262px] lg:w-[372px] lg:h-[424px] rounded-xl mb-4 bg-cover bg-no-repeat flex flex-col justify-end items-center text-center gap-4 py-3'
        style={{
          backgroundImage: `url(${urlImages}${film.poster_path})`
        }}>
        <Title.H2 stylish=''>
          {film.title}
        </Title.H2>

        <div className='flex flex-col lg:flex-row gap-6'>
          <Press.Button text='Ver detalhes' color='bg-[#98ff2b]' />
          <Press.Button text='Ver trailer' color='bg-[#aa10f7]' />
        </div>

        <div className='Shadow' />
      </div>
    </div>
  )
}

export default FilmCard