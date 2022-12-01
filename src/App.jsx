import { Route, Routes } from 'react-router-dom'
import { Home } from './Pages/Home/Home'
import './App.css'
import { Destinations } from './Pages/Destinations/Destinations'
import { Crew } from './Pages/Crew/Crew'

function App () {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/destinations/:id' element={<Destinations />} />
      <Route path='/crew/:id' element={<Crew />} />
    </Routes>
  )
}

export default App
