import React from "react";
import { useState, createContext } from "react";

export const ThemeContext = createContext();

export const ThemeProvider =(props)=>{
   const [darkmode, setdarkmode] = useState("false")
   return  <ThemeContext.Provider value={{darkmode,setdarkmode}}>{props.children}</ThemeContext.Provider>;
}