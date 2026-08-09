import React, { Children, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'


//=================== kya hum app.jsx wala kam yahan krr skte.? ======================

// function MyApp() {
//   return(
//     <div>
//       <h2>Custom app !!!  | Mehar Haris</h2>
//     </div>
//   )
// }


//=============== kya humne jo customReact banaya tha usko render krr skte.? ===================

// const reactElement = {
//     type : 'a',
//     props : {
//         href : 'https://google.com',
//         target : '_blank'
//     },
//     Children: 'click me to visit google' ---------------ans is no
// }


//==================== new funciton named anotherelement ================

// function AnotherElement() {
//   return(
//     <a href="https://google.com">Visit Google</a>
//   )
// }

// ================ In react version ==============================

// const AnotherElement = (
//   <a href="https://google.com">vist Google</a>
// )

//=================== syntax that react actually use to render element ===========

const anotherReactElement = React.createElement(
  'a',
  {
    href : 'https://google.com',
    target : '_blank' 
  },
  'Click Here! to visit Google'
)


createRoot(document.getElementById('root')).render(
  // <MyApp />
  // MyApp()
  // <AnotherElement />
  // AnotherElement
  anotherReactElement

)
