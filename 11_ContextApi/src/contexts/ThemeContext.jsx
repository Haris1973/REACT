import React, { createContext, useState } from 'react'

export const themedatacontext = createContext()


function ThemeContext(props) {

    const [theme, settheme] = useState('light')

  return (
    <div>
        <themedatacontext.Provider value={{theme,settheme}}>
            {props.children}
        </themedatacontext.Provider>
    </div>
  )
}

export default ThemeContext