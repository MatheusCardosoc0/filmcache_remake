import { Paragraph, Press} from '@/components/GlobalElements'
import Loading from '@/components/Loading'
import ModifiquedTitle from '@/components/ModifiquedTitle'
import { useDataContext } from '@/context/DataContext'
import { useGetTrailer } from '@/hooks/useGetTrailer'
import React from 'react'
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router'
const ReactPlayer = dynamic(() => import('react-player/lazy'), { ssr: false });

const TrailerContainer = () => {

  const { currentFilm } = useDataContext()
  const router = useRouter()

  const { error, isLoading, trailer } = useGetTrailer()

  return (
    <div className='sm:mr-[30%] w-full justify-center text-center items-center flex flex-col gap-20  h-full pb-20 py-6'>

      <ModifiquedTitle />

      <div className='w-[95%] max-w-[700px] flex justify-center items-center flex-col gap-20'>
        {error && (
          <Paragraph.Bolder>
            {error}
          </Paragraph.Bolder>
        )}
        {isLoading || error ? <Loading /> :
          <ReactPlayer
            width={"100%"}
            url={`https://www.youtube.com/watch?v=${trailer.key}`}
            controls={true}
          />}
      </div>

      <div className='flex sm:w-full flex-col sm:flex-row gap-12 w-[80%] justify-around'>
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