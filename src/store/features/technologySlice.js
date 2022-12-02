import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const API_URL = 'http://localhost:8080/api/v1/technology'

export const technologySlice = createSlice({
  name: 'technology',
  initialState: {
    data: []
  },
  reducers: {
    getTech: (state, action) => {
      state.data = [action.payload]
    }
  }
})

export const getTechAsync = (id) => async (dispatch) => {
  try {
    const response = await axios.get(`${API_URL}/${id}`)
    dispatch(getTech(response.data[0]))
  } catch (error) {
    console.log(error)
  }
}

export const { getTech } = technologySlice.actions
export const showTech = (state) => state.technology.data
export default technologySlice.reducer
