import { TrailerProps } from '@/@types/TrailerProps'
import { Paragraph, Press, Title } from '@/components/GlobalElements'
import Loading from '@/components/Loading'
import ModifiquedTitle from '@/components/ModifiquedTitle'
import { useDataContext } from '@/context/DataContext'
import { useGetTrailer } from '@/hooks/useGetTrailer'
import { api, getApiTrailer } from '@/services/axiosConfig'
import React, { useEffect, useState } from 'react'
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router'
const ReactPlayer = dynamic(() => import('react-player/lazy'), { ssr: false });

const TrailerContainer = () => {

  const { currentFilm } = useDataContext()
  const router = useRouter()

  const { error, isLoading, trailer } = useGetTrailer()

  return (
    <div className='mr-[30%] w-full justify-center text-center items-center flex flex-col gap-20 pt-6 h-screen pb-20'>

      <ModifiquedTitle />

      <div className='h-[326px] w-[95%] lg:h-[500px] flex justify-center items-center flex-col gap-20'>
        {error && (
          <Paragraph.Bolder>
            {error}
          </Paragraph.Bolder>
        )}
        {isLoading || error ? <Loading /> :
          <ReactPlayer
            height={"100%"}
            width={"100%"}
            url={`https://www.youtube.com/watch?v=${trailer.key}`}
            controls={true}
          />}
      </div>

      <div className='flex w-full justify-around items-center'>
        <Press.Button color='detail'
          stylish='p-2 text-2xl'
          onClick={() => router.push(`/film_detail/${currentFilm.id}`)} />

        <Press.Button color='main'
          stylish='p-2 text-2xl'
          onClick={() => router.push('/')} />
      </div>
    </div>
  )
}

export default TrailerContainer