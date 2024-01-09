import React,{useState,useContext, createContext} from "react";

export const AppContext = createContext()

const Context=({children})=>{
  const[isDark,setisDark]=useState(false)

  return(
    <AppContext.Provider
        value={{isDark,setisDark}}>
        {children}
    </AppContext.Provider>
  )
}

export default Context;