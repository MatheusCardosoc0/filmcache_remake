import { GenreProps } from '@/@types/GenreProps'
import { useDataContext } from '@/context/DataContext'
import { useGetFilmsByGenre } from '@/hooks/useGetFilmsByGenre'
import React from 'react'
import { Paragraph } from './GlobalElements'

interface GenreCardProps {
  genre: GenreProps
}

const GenreCard = ({ genre }: GenreCardProps) => {

  const { setGenre } = useDataContext()

  return (
    <button className='p-2 bg-[#656565] rounded-xl drop-shadow-[1px_1px_2px_black] flex justify-center items-center'
      onClick={() => setGenre(genre.id)}>
      <div className='p-2 bg-[#484848] rounded-xl drop-shadow-[1px_1px_2px_black] hover:drop-shadow-[0px_0px_1px_black] hover:bg-[#1d7c03]'>
        <Paragraph.Base stylish='text-[#ffffff]'>
          {genre.name}
        </Paragraph.Base>
      </div>
    </button>
  )
}

export default GenreCard