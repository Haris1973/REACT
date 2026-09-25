import { createContext,useContext } from "react";

export const themeContext = createContext({
    themeMode : "light",
    darkTheme : ()  => {},
    lightMode : () => {},
})

export const ThemeProvider = themeContext.Provider

export default function useTheme(){
    return useContext(themeContext)
}