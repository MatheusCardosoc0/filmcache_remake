import { Paragraph, Press, Title } from '@/components/GlobalElements'
import ModifiquedTitle from '@/components/ModifiquedTitle'
import { useDataContext } from '@/context/DataContext'
import { urlImages } from '@/services/urlImages'
import { useRouter } from 'next/router'
import React from 'react'
import {} from 'react-icons/ai'

const DetailsContainer = () => {

  const { currentFilm } = useDataContext()
  const router = useRouter()

  return (
    <section className='flex justify-center py-2 w-full bg-[#847e7e] flex-col items-center gap-20 mr-[30%]'>

      <ModifiquedTitle />
      
      <div className='flex flex-col justify-center items-center gap-8'>

        <img src={`${urlImages}${currentFilm.backdrop_path}`}
          className="border-[12px] border-[#b9b2b2] drop-shadow-[1px_1px_4px_black]" />

        <div className='w-[90%] max-w-[620px] p-4 bg-[#afadad] rounded-xl drop-shadow-[1px_1px_3px_black]'>
          <Paragraph.Bolder stylish='text-justify'>
            {currentFilm.overview}
          </Paragraph.Bolder>
        </div>

        <div className='flex justify-around w-full px-2 text-white drop-shadow-[1px_1px_2px_black] text-xl font-semibold'>
          <span>
            <Paragraph.Base>Lingua original:</Paragraph.Base>
            {currentFilm.original_language}
          </span>
          <span>
            <Paragraph.Base>Data de lançamento:</Paragraph.Base>
            {currentFilm.release_date}
          </span>
        </div>

        <div className='flex justify-around w-full px-2 text-white drop-shadow-[1px_1px_2px_black] text-xl font-semibold'>
          <span>
            <Paragraph.Base>Nota média:</Paragraph.Base>
            {String(currentFilm.vote_average).slice(0,3)}
          </span>
          <span>
            <Paragraph.Base>Popularidade:</Paragraph.Base>
            {currentFilm.popularity}
          </span>
        </div>
        
        <div className='flex w-full justify-around'>
          <Press.Button
          color='main'
          stylish='p-2 text-2xl'
          onClick={() => router.push('/')} />

          <Press.Button
          color='trailer'
          stylish='p-2 text-2xl'
          onClick={() => router.push(`/trailer/${currentFilm.id}`)} />
        </div>
      </div>
    </section>
  )
}

export default DetailsContainer