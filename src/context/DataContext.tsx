import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useState } from "react";

interface InitialState {
  genre: number
  setGenre: Dispatch<SetStateAction<number>>
  page: number
  setMutatedPage: (op: 'reduce' | 'add') => void
}

const ContextData = createContext<InitialState>({} as InitialState)


export const ContextDataProvider = ({ children }: { children: ReactNode }) => {
  const [genre, setGenre] = useState(0)
  const [page, setPage] = useState(1)

  function setMutatedPage(op: 'reduce' | 'add') {
    if(op == 'add'){
      setPage(prev => prev += 1)
    }
    if(op == 'reduce'){
      if(page == 1){
        return
      }
      setPage(prev => prev -= 1)
    }
  }

  return (
    <ContextData.Provider value={{
      genre,
      setGenre,
      page,
      setMutatedPage
    }}>
      {children}
    </ContextData.Provider>
  )
}

export const useDataContext = () => useContext(ContextData)