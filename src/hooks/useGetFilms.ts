import { Film } from "@/@types/FilmInterface"
import { api } from "@/services/axiosConfig"
import { useEffect, useState } from "react"

export function useGetFilms(){
  const [films, setFilms] = useState<Film[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  async function GetFilms() {
    setLoading(true)
    try {
      const response = await api.get("discover/movie", {
        params: {
          api_key: "ccbfbc8dd52c71d7f1a46e1b46db20ee",
          language: "pt-br",
          page: 1,
        }
      })
      
      setFilms(response.data.results)
      setError('')
    } catch (error) {
      console.log(error)
      setError("Erro ao carregar os filmes")
    }
    setLoading(false)
  }

  useEffect(() => {
    GetFilms()
  }, [])

  return {
    error,
    loading,
    films
  }
}