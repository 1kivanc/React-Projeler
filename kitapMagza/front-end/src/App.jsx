import { useReducer, useState } from 'react'
import './App.css'
import Main from './components/Main'
import { BooksContext, ThemeContext } from './content'
import { cartReducer, initialState } from './reducers/CartReducers'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';


function App() {
  const [darkMode , setDarkMode] = useState(true)
  const [state,dispatch] = useReducer(cartReducer,initialState)
  return (
    <ThemeContext.Provider value={{darkMode,setDarkMode}}>
     <BooksContext.Provider value={{state,dispatch}}>
          <Main/>
          <ToastContainer/>
     </BooksContext.Provider>
     
    </ThemeContext.Provider>
  )
}

export default App
