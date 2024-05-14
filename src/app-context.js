import { createContext } from "react";

export const AppContext = createContext({
    themeColor:'',
    setThemeColor:()=>{},
    header:{},
    setHeader:()=>{},
});