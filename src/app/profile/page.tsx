"use client"
import { useTheme } from 'next-themes'
import { useEffect } from 'react'
export default function profile()
{
    const { theme, setTheme } = useTheme()
   useEffect(()=>{
    console.log(theme);
    
   },[theme])
   
    
    return <><h1>Profile  </h1></>
}