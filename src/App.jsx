import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NotificationBar from './components/notification/NotificationBar'
import Home from './pages/Home/Home'
import Navigation from './components/navigation/Navigation'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
        <NotificationBar/>
        <Navigation/>
        <Routes>
          <Route path="/" element={<Home/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default App
