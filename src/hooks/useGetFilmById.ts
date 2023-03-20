import { Film } from "@/@types/FilmInterface"
import { useDataContext } from "@/context/DataContext"
import { api } from "@/services/axiosConfig"
import { useEffect, useState } from "react"

export function useGetFilmById(film_id: number){
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  const {setCurrentFilm} = useDataContext()


  async function getFilmById() {
    setIsLoading(true)
    try {
      const response = await api.get((`movie/${film_id}`), {
        params: {
          api_key: "ccbfbc8dd52c71d7f1a46e1b46db20ee",
          language: "pt-br",
        }
      })

      setCurrentFilm(response.data)
    } catch (error) {
      setError('Erro ao pegar dado do filme')
      console.log('Erro ao pegar dado do filme', { case: error })
    }
    setIsLoading(false)
  }

  useEffect(() => {
    getFilmById()
  }, [film_id])

  return {
    isLoading,
  }
}