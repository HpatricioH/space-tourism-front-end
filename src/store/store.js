import { configureStore } from '@reduxjs/toolkit'
import destinationsSlice from './features/destinationsSlice'

export default configureStore({
  reducer: {
    destinations: destinationsSlice
  }
})
