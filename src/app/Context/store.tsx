"use client"

import { createContext,useContext,Dispatch,SetStateAction,useState } from "react"
import { any, boolean } from "zod"


interface ContextProps{
    userloginornot:any,
    setuserloginornot:Dispatch<SetStateAction<boolean>>
}

const GlobalContext = createContext<ContextProps>({
    userloginornot:boolean,
    setuserloginornot:()=>{}
})


export const GlobalContextProvider=({children}:any)=>
{
    const [userloginornot,setuserloginornot]= useState(false);

    return (
    
    <GlobalContext.Provider value={{userloginornot,setuserloginornot}}>
      
        {children}
      
    </GlobalContext.Provider>)
}


export const useGlobalContext = ()=> useContext(GlobalContext)