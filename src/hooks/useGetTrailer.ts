import { TrailerProps } from "@/@types/TrailerProps"
import { useDataContext } from "@/context/DataContext"
import { getApiTrailer } from "@/services/axiosConfig"
import { useEffect, useState } from "react"

export function useGetTrailer(){
  const [trailer, setTrailer] = useState<TrailerProps>({} as TrailerProps)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  const {currentFilm} = useDataContext()

  async function GetTrailer() {
    setIsLoading(true)
    try {
      const trailerFilm = await getApiTrailer(currentFilm.id)

      console.log(trailerFilm)
      setTrailer(trailerFilm)
      
    } catch (err) {
      setError('Não foi possivel encontrar o trailer desse filme')
      console.log(error, {case: err})
    }
    setIsLoading(false)
  }

  useEffect(() => {
    GetTrailer()
    if(trailer === undefined){
      setError('Esse filme não possui trailer')
    }else {
      setError('')
    }
  }, [currentFilm])

  


  return {
    trailer,
    isLoading,
    error
  }
}