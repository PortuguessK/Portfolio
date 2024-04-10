import { createContext, useContext, useState} from "react";

const ChangeModeContext = createContext();
export const ChangeModeProvider = ( { children  }) => {
  const [isDark, setisDark] = useState(false)
  
  const toggleisDark = () => {
    setisDark(!isDark)
  }

  return(
    <ChangeModeContext.Provider value={{isDark ,toggleisDark}}>
        {children}
    </ChangeModeContext.Provider>
  )
}


export const ChangeModeShared = () => useContext(ChangeModeContext)