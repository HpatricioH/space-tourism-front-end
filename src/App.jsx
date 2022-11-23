import { Route, Routes } from 'react-router-dom'
import { Home } from './Pages/Home/Home'
import './App.css'
import { Destinations } from './Pages/Destinations/Destinations'

function App () {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/destinations' element={<Destinations />} />
    </Routes>
  )
}

export default App
