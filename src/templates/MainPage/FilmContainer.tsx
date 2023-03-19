import FilmCard from '@/components/FilmCard'
import Loading from '@/components/Loading'
import { useGetFilmsByGenre } from '@/hooks/useGetFilmsByGenre'
import React from 'react'

const FilmContainer = () => {

  const { films, isLoading, setGenre, setPage } = useGetFilmsByGenre()

  return (
    <section>
      <div>
        {isLoading ? <Loading /> : (
          films.map(film => (
            <FilmCard key={film.id}
              film={film} />
          ))
        )}
      </div>

      <button className='text-3xl text-red-500' onClick={() => setGenre(80)}>a</button>
    </section>
  )
}

export default FilmContainer