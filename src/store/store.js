import { configureStore } from '@reduxjs/toolkit'
import crewSlice from './features/crewSlice'
import destinationsSlice from './features/destinationsSlice'
import technologySlice from './features/technologySlice'

export default configureStore({
  reducer: {
    destinations: destinationsSlice,
    crew: crewSlice,
    technology: technologySlice
  }
})
