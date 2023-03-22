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
    <button className='p-2 bg-[#87c524] rounded-xl drop-shadow-[1px_1px_2px_black] flex justify-center items-center'
      onClick={() => setGenre(genre.id)}>
      <div className='p-2 bg-[#81f514] rounded-xl drop-shadow-[1px_1px_2px_black] hover:drop-shadow-[0px_0px_1px_black] hover:bg-[#58dc0b]'>
        <Paragraph.Base stylish='text-[#050505]'>
          {genre.name}
        </Paragraph.Base>
      </div>
    </button>
  )
}

export default GenreCard