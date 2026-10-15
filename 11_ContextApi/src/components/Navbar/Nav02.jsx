import React, { useContext } from 'react'
import { themedatacontext } from "../../contexts/ThemeContext";

function Nav02(props) {

  const { theme, settheme } = useContext(themedatacontext)

  console.log(theme)

  return (
    <div className='flex gap-8'>
      <h4>home</h4>
      <h4>Contact</h4>
      <h4>About</h4>
      <h4>User</h4>
      <h5>{theme}</h5>
    </div>
  )
}

export default Nav02