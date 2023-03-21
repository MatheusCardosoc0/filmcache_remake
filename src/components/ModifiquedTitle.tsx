import { useDataContext } from '@/context/DataContext'
import React from 'react'
import { Paragraph, Title } from './GlobalElements'


const ModifiquedTitle = () => {

  const {currentFilm} = useDataContext()

  return (
    <div className='p-2 drop-shadow-[1px_1px_1px_black] bg-[#0dddc5] rounded-xl w-[90%]'>
      <Title.H2 stylish='text-6xl md:text-6xl text-center gap-2 flex flex-col'>
        {currentFilm.title}
        <Paragraph.Base stylish='text-[12px] md:text-[14px]'>
          {currentFilm.original_title}
        </Paragraph.Base>
      </Title.H2>
    </div>
  )
}

export default ModifiquedTitle