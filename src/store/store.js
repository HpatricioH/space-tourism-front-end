import { configureStore } from '@reduxjs/toolkit'
import crewSlice from './features/crewSlice'
import destinationsSlice from './features/destinationsSlice'

export default configureStore({
  reducer: {
    destinations: destinationsSlice,
    crew: crewSlice
  }
})
