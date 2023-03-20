import { Paragraph, Title } from '@/components/GlobalElements'
import { useDataContext } from '@/context/DataContext'
import { urlImages } from '@/services/urlImages'
import React from 'react'

const DetailsContainer = () => {

  const { currentFilm } = useDataContext()

  return (
    <section className='flex flex-[3] justify-center py-2 bg-[#847e7e] flex-col items-center gap-20'>
      <div className='p-2 drop-shadow-[1px_1px_1px_black] bg-[#c4c2c2] rounded-xl w-[90%]'>
        <Title.H2 stylish='text-4xl md:text-6xl text-center gap-2 flex flex-col'>
          {currentFilm.title}
          <Paragraph.Base stylish='text-[12px] md:text-[14px]'>
            {currentFilm.original_title}
          </Paragraph.Base>
        </Title.H2>
      </div>
      <div className='flex flex-col justify-center items-center gap-8'>

        <img src={`${urlImages}${currentFilm.backdrop_path}`}
          className="border-[12px] border-[#b9b2b2] drop-shadow-[1px_1px_4px_black]" />

        <div className='w-[90%] p-2 bg-[#afadad] rounded-xl drop-shadow-[1px_1px_1px_black]'>
          <Paragraph.Bolder>
            {currentFilm.overview}
          </Paragraph.Bolder>
        </div>
      </div>
    </section>
  )
}

export default DetailsContainer