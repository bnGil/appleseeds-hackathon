import React from "react";
import { useContext, useState, useEffect } from "react";

const dataContext = React.createContext()

export function useData() {
  return useContext(dataContext)
}

export function Language({children}) {
  const [language, setLanguage] = useState("EN")

  return (
    <dataContext.Provider value={{language,setLanguage}}>
      {children}
    </dataContext.Provider>
  )
}


