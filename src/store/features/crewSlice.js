import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const API_URL = 'http://localhost:8080/api/v1/crew'

export const crewSlice = createSlice({
  name: 'crew',
  initialState: {
    data: []
  },
  reducers: {
    getCrew: (state, action) => {
      state.data = [action.payload]
    }
  }
})

export const getCrewAsync = (id) => async (dispatch) => {
  try {
    const response = await axios.get(`${API_URL}/${id}`)
    dispatch(getCrew(response.data[0]))
  } catch (error) {
    console.log(error)
  }
}

export const { getCrew } = crewSlice.actions
export const showCrew = (state) => state.crew.data
export default crewSlice.reducer
