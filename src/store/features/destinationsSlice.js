import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const API_URL = 'http://localhost:8080/api/v1/destination'

export const destinationsSlice = createSlice({
  name: 'destinations',
  initialState: {
    data: []
  },
  reducers: {
    getDestinations: (state, action) => {
      state.data = [action.payload]
    }
  }
})

export const getDestinationsAsync = (id) => async (dispatch) => {
  try {
    const response = await axios.get(`${API_URL}/${id}`)
    dispatch(getDestinations(response.data[0]))
  } catch (error) {
    console.log(error)
  }
}

export const { getDestinations } = destinationsSlice.actions
export const showDestinations = (state) => state.destinations.data
export default destinationsSlice.reducer
