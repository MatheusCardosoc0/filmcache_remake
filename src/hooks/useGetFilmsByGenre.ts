import { Film } from "@/@types/FilmInterface"
import { useDataContext } from "@/context/DataContext"
import { api } from "@/services/axiosConfig"
import { useEffect, useState } from "react"

export function useGetFilmsByGenre(){
  const [films, setFilms] = useState<Film[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")
  const [page, setPage] = useState(1)

  const {genre} = useDataContext()

  async function GetFilms() {
    setIsLoading(true)
    try {
      const response = await api.get("discover/movie", {
        params: {
          api_key: "ccbfbc8dd52c71d7f1a46e1b46db20ee",
          language: "pt-br",
          page: page,
          with_genres: genre || undefined
        }
      })

      setFilms(response.data.results.slice(0,18))
      setError('')
    } catch (error) {
      console.log(error)
      setError("Erro ao carregar os filmes")
    }
    if(films.length == 0){
      setError("Não há filmes desse gênero.")
    }else{
      setError('')
    }

    setIsLoading(false)
  }

  useEffect(() => {
    GetFilms()
  }, [genre, page])

  return {
    error,
    isLoading,
    films,
    setPage
  }
}