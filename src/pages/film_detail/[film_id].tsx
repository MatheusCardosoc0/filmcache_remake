import { Film } from '@/@types/FilmInterface'
import Loading from '@/components/Loading'
import { useGetFilmById } from '@/hooks/useGetFilmById'
import { api } from '@/services/axiosConfig'
import DetailsFilmPage from '@/templates/DetailsFilmPage'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

const FilmDetails = () => {

  const router = useRouter()
  const { film_id } = router.query

  const { isLoading } = useGetFilmById(Number(film_id))

  return (
    <>
      {isLoading ? <Loading /> : (
        <DetailsFilmPage />
      )}
    </>
  )
}

export default FilmDetails