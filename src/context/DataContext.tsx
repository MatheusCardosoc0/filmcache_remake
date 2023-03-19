import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useState } from "react";

interface InitialState{
  genre: number
  setGenre: Dispatch<SetStateAction<number>>
}

const ContextData = createContext<InitialState>({} as InitialState)


export const ContextDataProvider = ({children}: {children: ReactNode}) => {
  const [genre, setGenre] = useState(0)

  return (
    <ContextData.Provider value={{
      genre,
      setGenre
    }}>
     {children}
    </ContextData.Provider>
  )
}

export const useDataContext = () => useContext(ContextData)