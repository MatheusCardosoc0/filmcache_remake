import { Container } from '@/components/GlobalElements'
import { useGetCategories } from '@/hooks/useGetCategories'
import { useGetFilmsByGenre } from '@/hooks/useGetFilmsByGenre'
import { api } from '@/services/axiosConfig'
import React, { useEffect } from 'react'
import GenresContainer from './GenresContainer'

const ContentContainer = () => {

  
  const {error, films, loading, setGenre, setPage} = useGetFilmsByGenre()

  return (
    <section>
      <Container>
        <GenresContainer />
        <div></div>
      </Container>
    </section>
  )
}

export default ContentContainer