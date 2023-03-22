import FilmCard from '@/components/FilmCard'
import Loading from '@/components/Loading'
import NavigatePagesButton from '@/components/NavigatePagesButton'
import { useGetFilmsByGenre } from '@/hooks/useGetFilmsByGenre'
import React from 'react'
import { BsArrowDownLeftCircleFill, BsArrowLeftCircleFill, BsArrowRightCircleFill } from 'react-icons/bs'

const FilmContainer = () => {

  const { films, isLoading } = useGetFilmsByGenre()

  return (
    <section className='p-3 lg:p-8 bg-[#323230]'>
      <div className='drop-shadow-[0px_0px_4px_black] bg-[#3a3e3e] rounded-xl py-7 lg:py-12 items-center flex flex-col justify-center p-2'>

        <div className='flex flex-wrap p-2  py-8  justify-center gap-8'>
          {isLoading ? <Loading /> : (
            films.map(film => (
              <FilmCard key={film.id}
                film={film} />
            ))
          )}
        </div>

        <NavigatePagesButton />
      </div>
    </section>
  )
}

export default FilmContainer