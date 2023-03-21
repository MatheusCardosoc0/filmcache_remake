import { Film } from "@/@types/FilmInterface"
import { useDataContext } from "@/context/DataContext"
import { api } from "@/services/axiosConfig"
import { useEffect, useState } from "react"

export function useGetRecomendations(){

  const [recomendations, setRecomendations] = useState<Film[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')


  const {currentFilm} = useDataContext()

  async function getRecomedations() {
    setIsLoading(true)
    try {
      const response = await api.get(`movie/${currentFilm.id}/recommendations`)

      setRecomendations(response.data.results)
      if(recomendations.length > 0){
        setError("Não temos recomendações para esse filme")
      }else {
        setError("")
      }
    } catch (error) {
      setError('Erro ao pegar as recomendações')
      console.log("Erro ao pegar as recomendações", {case: error})
    }
    setIsLoading(false)
  }

  useEffect(() => {
    getRecomedations()
  }, [currentFilm])


  return {
    recomendations,
    isLoading,
    error
  }

}