
import { useGetCategories } from '@/hooks/useGetCategories'
import { useGetFilmsByGenre } from '@/hooks/useGetFilmsByGenre'
import { api } from '@/services/axiosConfig'
import React, { useEffect } from 'react'
import FilmContainer from './FilmContainer'
import GenresContainer from './GenresContainer'

const ContentContainer = () => {

  return (
    <section>
      <div >
        <GenresContainer />
        <FilmContainer />
      </div>
    </section>
  )
}

export default ContentContainer