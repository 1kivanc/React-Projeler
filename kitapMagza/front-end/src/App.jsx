import { useReducer, useState } from 'react'
import './App.css'
import Main from './components/Main'
import { BooksContext, ThemeContext } from './content'
import { cartReducer, initialState } from './reducers/CartReducers'

function App() {
  const [darkMode , setDarkMode] = useState(true)
  const [state,dispatch] = useReducer(cartReducer,initialState)
  return (
    <ThemeContext.Provider value={{darkMode,setDarkMode}}>
     <BooksContext.Provider value={{state,dispatch}}>
          <Main/>
     </BooksContext.Provider>
     
    </ThemeContext.Provider>
  )
}

export default App
