import Loading from '@/components/Loading'
import { useGetFilmById } from '@/hooks/useGetFilmById'
import TrailerFilmPage from '@/templates/TrailerFilmPage'
import { useRouter } from 'next/router'
import React from 'react'

const Trailer = () => {

  const router = useRouter()
  const {film_id} = router.query

  const {isLoading} = useGetFilmById(Number(film_id))

  return (
    <div>
      {isLoading? <Loading /> : (
        <TrailerFilmPage />
      )}
    </div>
  )
}

export default Trailer