import React, {useRef, useState, useEffect} from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NotificationBar from './components/notification/NotificationBar'
import Home from './pages/Home/Home'
import Navigation from './components/navigation/Navigation'

function App() {
  const [width, setWidth] = useState(window.innerWidth)
  useEffect(()=>{
    const handleResize = () => {
      setWidth(window.innerWidth)
    }

    window.addEventListener('resize', handleResize)
    
    return () => {
      window.removeEventListener('resize', handleResize)
    }

},[])
  return (
    <BrowserRouter>
        {width < 1024 ? <NotificationBar/> : null }
        
        <Navigation/>
        <Routes>
          <Route path="/" element={<Home/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default App
