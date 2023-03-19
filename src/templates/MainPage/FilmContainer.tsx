import FilmCard from '@/components/FilmCard'
import Loading from '@/components/Loading'
import { useGetFilmsByGenre } from '@/hooks/useGetFilmsByGenre'
import React from 'react'

const FilmContainer = () => {

  const { films, isLoading, setPage } = useGetFilmsByGenre()

  return (
    <section className='p-8 bg-[#d0cece]'>
      <div className='flex flex-wrap p-4 drop-shadow-[0px_0px_4px_black] py-20 bg-[#c0bebe] rounded-xl justify-center gap-8'>
        {isLoading ? <Loading /> : (
          films.map(film => (
            <FilmCard key={film.id}
              film={film} />
          ))
        )}
      </div>
    </section>
  )
}

export default FilmContainer